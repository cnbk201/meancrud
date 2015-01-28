module.exports = function(app) {
    // show indix view
    app.get('/', function(req, res) {
            res.render('index', {
                title: 'Index page',
            });
    });
};