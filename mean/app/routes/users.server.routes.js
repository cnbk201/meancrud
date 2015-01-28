var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function(app) {
	// showing list and create new user
	app.route('/users').post(users.create).get(users.list);


	/**
     * This is an example for parame with name route
     * with id as input param
     * 
     * param method will take process function to process
     * what should be done with the id, db transection
     *
     * get or route will be to display the result of the db transection 
     */
	console.log("init user id")
	app.param('userId', users.userByID);

	console.log("init user read")
	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);;	
	//app.get('/users/:userId',users.read);

	app.route('/register')
		.get(users.renderRegister)
		.post(users.register);

	app.route('/login')
		.get(users.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.get('/logout', users.logout);
};