Package.describe({
	summary: "Font Awesome"
});

Package.on_use(function (api) {
	api.add_files('fontawesome-webfont.eot', 'client');
	api.add_files('fontawesome-webfont.svg', 'client');
	api.add_files('fontawesome-webfont.ttf', 'client');
	api.add_files('fontawesome-webfont.woff', 'client');
	api.add_files('FontAwesome.otf', 'client');
	api.add_files('font-awesome.css', 'client');
	api.add_files('path-overrides.css', 'client');
});