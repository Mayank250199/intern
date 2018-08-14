// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');
var express = require('express');
// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
// Add headers

keystone.set('cloudinary config', 'cloudinary://356738636694133:gLJAj3TEUkc0OK-D0_CWS7Woqbo@rahul252525' );

keystone.set('cors allow origin', true);
keystone.init({
	'name': 'P S Air Solutions',
	'brand': 'P S Air Solutions',
	'sass': 'public',
	'static': ['public','uploads'],
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',
	'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/psairsolutions',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');
// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	Enquiries_Users: ['enquiries','users'],
	Marquees_Client_Address: ['marquees','Client','Address'],
	About_Product: ['AboutText','AboutPics','Product'],
	Ahu_Cassette  : ['AhuPics','CassettePics'],
	Chiller_Duct : ['ChillerPics','DuctPics'],
	Ductable_Package : ['DuctablePics','PackagePics'],
	Panel_Split : ['PanelPics','SplitPics'],
	vrf_Slides_Work: ['VrfPics','Slider','Work'],
});

// Start Keystone to connect to your database and initialise the web server



keystone.start();
