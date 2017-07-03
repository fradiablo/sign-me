var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
    {
        "id" : "232kAk",
        "text" : "Eggs"
    },
    {
        "id" : "234sdd",
        "text": "Milk"
    },
    {
        "id" : "dkcuu7",
        "text": "Bacon"
    },
    {
        "id" : "fdj5jsdh",
        "text" : "Salt"
    }
];
 
app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.get('/funions', function(req, res) {
    res.send('yo give me funions, foo');
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    if (!ingredient || ingredient.text === "") {
        res.status(500).send({
            error: "Your ingredient must have a text."
        });
    } else {
        ingredients.push(ingredient);
        res.status(200).send(ingredient);
    }
});

app.put('/ingredients/:ingredientId', function(req, res) {
    
    var newText = req.body.text;
    
    if (!newText || newText == "") {
        res.status(500).send({
            error: "Your ingredient must have text."
        });
    } else {
        for (var i = 0; i < ingredients.length; i++) {
            var ing = ingredients[i];
            
            if (ing.id === req.params.ingredientId) {
                ingredients[i].text = newText;
                break;
            }
        }
        
        res.status(200).send(ingredients);
    }
    
}); 

app.listen(3000, function() {
    console.log('First API running on port 3000');
});