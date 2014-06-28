Meteor.startup(function(){
	$.pnotify.defaults.delay = 3000;
	$.pnotify.defaults.history = false;
	$.pnotify.defaults.nonblock = false;
    $.pnotify.defaults.nonblock_opacity = .2;
    $.pnotify.defaults.opacity = .95;
    $.pnotify.defaults.animation = "slide";
    $.pnotify.defaults.animate_speed = 400;
    $.pnotify.defaults.width = "100%";

    // clicking on a notification removes it
    $('body').on('click','.ui-pnotify', function(e){ $(e.currentTarget).remove(); });
});

Notify = {};

Notify.notify = function(config){
	_.defaults(config, {
		addclass: "stack-bar-top",
        cornerclass: ""
	});
	$.pnotify(config);
};

Notify.success = function(title, text){
	Notify.notify({
		title: title
		, text: text
		, type: 'success'
	});
};

Notify.error = function(title, text){
	Notify.notify({
		title: title
		, text: text
		, type: 'error'
	});
};

Notify.info = function(title, text){
	Notify.notify({
		title: title
		, text: text
		, type: 'info'
	});
};