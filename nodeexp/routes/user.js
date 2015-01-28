module.exports = function(app) {
    // showing user page
    app.route('/users').get(function(req, res) {
            res.render('user', {
                title: 'User page'
            });
    });
};