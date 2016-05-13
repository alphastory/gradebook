Gradebook.Student = DS.Model.extend( {
	name: DS.attr( 'string' ),
	grade: DS.attr( 'number' ),
	isFailing: DS.attr( 'boolean' )
} );

Gradebook.Student.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Eddard Stark',
			grade: 100,
			isFailing: false
		},{
			id: 2,
			name: 'Caitlyn Stark',
			grade: 90,
			isFailing: false
		},{
			id: 3,
			name: 'Robb Stark',
			grade: 60,
			isFailing: true
		},{
			id: 4,
			name: 'Sansa Stark',
			grade: 85,
			isFailing: false
		},{
			id: 5,
			name: 'Bran Stark',
			grade: 70,
			isFailing: false
		},{
			id: 6,
			name: 'Rickon Stark',
			grade: 10,
			isFailing: true
		},{
			id: 7,
			name: 'Arya Stark',
			grade: 40,
			isFailing: true
		}
	]
});
