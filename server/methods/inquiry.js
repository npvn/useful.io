Meteor.methods({
	'/inquiry': function(input){
		this.unblock();

		Email.send({
			to: "projects@useful.io"
			, from: "projects@useful.io"
			, subject: "Useful IO Project"
			, text: "Name: " + input.name + "\nEmail: " + input.email + "\nProject: " + input.description
		});
		return true;
	}
})