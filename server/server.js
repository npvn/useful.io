var noop = function() {};

Meteor.setTimeout(function(){
	HTTP.get('http://www.useful.io', noop);
	HTTP.get('http://useful.io', noop);
}, 1000 * 60 * 29); // 29 minutes