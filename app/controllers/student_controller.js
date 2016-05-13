Gradebook.StudentController = Ember.ObjectController.extend({
	isEditing: false,
	isEditingName: false,
	isEditingGrade: false,
	actions: {
		editName: function () {
			this.set( 'isEditing', true );
			this.set( 'isEditingName', true );
		},

		editGrade: function(){
			this.set( 'isEditing', true );
			this.set( 'isEditingGrade', true );
		},

		acceptNameChanges: function(){
			this.set( 'isEditingName', false );

			if( Ember.isEmpty( this.get( 'model.name' ) ) ) {
				this.send( 'removeStudent' );
			} else {
				this.get( 'model' ).save();
			}
		},

		acceptGradeChanges: function(){
			this.set( 'isEditingGrade', false );
			var model = this.get( 'model' );

			if( model.get( 'grade' ) != '' ) {
				// Is the grade higher than 65?
				if( this.get( 'grade' ) > 65 ){
					this.set( 'isFailing', false );
				} else {
					this.set( 'isFailing', true );
				}

				this.get( 'model' ).save();
			} else {
				this.set( 'grade', '0' ).save();
			}
		},

		removeStudent: function(){
			var student = this.get( 'model' );
			student.deleteRecord();
			student.save();
		}
	},

	isFailing: function(key, value){
		var model = this.get('model');
		if( model.get( 'grade' ) <= 65 ){
			model.set( 'isFailing', true );
		} else {
			model.set( 'isFailing', false );
		}

		model.save();
		return model.get( 'isFailing' );
	}.property( 'model.@each.isFailing' )
});

