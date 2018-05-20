//routes.js

module.exports = function(app, db) {
    app.post('/contacts', (req, res) => {
        // You'll create your note here.
        console.log(req.body);          
        res.send('Hello')
    });
};