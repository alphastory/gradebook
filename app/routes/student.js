Gradebook.StudentsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find( 'student' );
	}
});
