

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};


var apiHandlers1 = require('./api/marquee');
var apiHandlers2 = require('./api/about');
var apiHandlers3 = require('./api/ahu');
var apiHandlers4 = require('./api/cassette');
var apiHandlers5 = require('./api/chiller');
var apiHandlers6 = require('./api/client');
var apiHandlers7 = require('./api/duct');
var apiHandlers8 = require('./api/ductable');
var apiHandlers9 = require('./api/package');
var apiHandlers10 = require('./api/panel');
var apiHandlers11 = require('./api/split');
var apiHandlers12 = require('./api/vrf');
var apiHandlers13 = require('./api/product');
var apiHandlers14 = require('./api/slider');

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.all('/contact', routes.views.contact);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	// API Routes

  app.get('/api/marquee', apiHandlers1.getmarquee);
 app.get('/api/about', apiHandlers2.getabout);
  app.get('/api/aboutpics', apiHandlers2.getaboutpics);
 app.get('/api/ahu', apiHandlers3.getahu);
 app.get('/api/ahupics', apiHandlers3.getahupics);
 app.get('/api/cassette', apiHandlers4.getcassette);
 app.get('/api/cassettepics', apiHandlers4.getcassettepics);
  app.get('/api/chiller', apiHandlers5.getchiller);
 app.get('/api/chillerpics', apiHandlers5.getchillerpics);
  app.get('/api/client', apiHandlers6.getclient);
  app.get('/api/duct', apiHandlers7.getduct);
 app.get('/api/ductpics', apiHandlers7.getductpics);
  app.get('/api/ductabe', apiHandlers8.getductable);
 app.get('/api/ductablepics', apiHandlers8.getductablepics);
  app.get('/api/package', apiHandlers9.getpackage);
  app.get('/api/panel', apiHandlers10.getpanel);
  app.get('/api/Split',keystone.middleware.cors, apiHandlers11.getsplitpics);
 app.get('/api/vrf', apiHandlers12.getvrf);
 app.get('/api/vrfpics', apiHandlers12.getvrfpics);
 app.get('/api/product', keystone.middleware.cors,apiHandlers13.getproduct);
  app.get('/api/slider', apiHandlers14.getslider);

};
