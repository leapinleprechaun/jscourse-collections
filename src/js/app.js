// Model
var User = Backbone.Model.extend({

});


// Collection
var Users = Backbone.Collection.extend({
	url: 'https://randomuser.me/api/?results=20',
	model: User
});

var usersList =  new Users();

usersList.fetch().then(function(users){
	_.each(users.results, function(result){
		console.log(result);
	});
});


// View


