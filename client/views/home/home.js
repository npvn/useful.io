Template.Home.helpers({

});

Template.Home.events({
	'click .contact-button': function(e, tmpl){
		e.preventDefault();
		$(e.currentTarget).adaptiveModal().openModal();
	}
});

// XXX - Because of the way adaptive-modal manipulates
// the DOM we have to catch this event here. If we decide
// to make adaptive-modal a first-class meteor component
// we'll need to adjust its behavior.
Meteor.startup(function(){
	$("body").on('submit', "form", function(e){
		e.preventDefault();

		var form = $(e.currentTarget)
        	, input = Forms.data(form);

        var valid = Forms.isValid(input, {
	        	name: {
				required: true
				, minLength: 3
			}
			, email: {
				required: true
				, email: true
			}
    	});

  		if(valid){
  			Meteor.call('/inquiry', input, function(err, result){
  				if(err){
  					Notify.error('Error sending inquiry.', err.reason);
  				}else{
  					Notify.success('Inquiry Sent Successfully.');
  				}

  				$('.am-close').click();
  				
  				form.find('input.form-control').val('');
			});
  		}else{
  			Notify.info('Name and Email are required.');
  		}
	});
});