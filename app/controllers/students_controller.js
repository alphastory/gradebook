Gradebook.StudentsController = Ember.ArrayController.extend({
	actions: {
		createStudent: function(){
			// Get the Students Name
			var name = this.get('studentName');
			if( !name.trim() ){ return; }

			// Create the new model
			var student = this.store.createRecord( 'student', {
				name: name,
				grade: 0,
				isFailing: false
			});

			// Clear the text field
			this.set( 'studentName', '' );

			// Save the new student
			student.save();
		}
	},

	lowestGrade: Ember.computed( function(){
		var ret = 100;
		var students = this.get( 'model' );
		students.forEach( function( student ){
			if( student.get( 'grade' ) < ret ){
				ret = student.get( 'grade' );
			}
		});
		return ret;
	} ).property( '@each.grade' ),

	highestGrade: Ember.computed( function(){
		var ret = 0;
		var students = this.get( 'model' );
		students.forEach( function( student ){
			if( student.get( 'grade' ) > ret ){
				ret = student.get( 'grade' );
			}
		});
		return ret;
	} ).property( '@each.grade' ),

	average: Ember.computed(function(){
		var students = this.get( 'model' );
		var len = students.get( 'length' );
		var ret = 0;
		students.forEach( function( student ){
			ret += student.get( 'grade' );
		});
		return ret / len;
	} ).property( 'model.@each.grade'  )
});
