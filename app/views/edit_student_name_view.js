Gradebook.EditStudentNameView = Ember.TextField.extend({
	didInsertElement: function(){
		this.$().focus();
	}
});

Ember.Handlebars.helper( 'edit-name', Gradebook.EditStudentNameView );
