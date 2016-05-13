Gradebook.EditStudentGradeView = Ember.TextField.extend({
	didInsertElement: function(){
		this.$().focus();
	}
});

Ember.Handlebars.helper( 'edit-grade', Gradebook.EditStudentGradeView );
