

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

  app.get('/api/marquee', keystone.middleware.cors,apiHandlers1.getmarquee);
 app.get('/api/about',keystone.middleware.cors, apiHandlers2.getabout);
  app.get('/api/getaboutpics',keystone.middleware.cors, apiHandlers2.getaboutpics);
 app.get('/api/ahutext',keystone.middleware.cors, apiHandlers3.getahu);
 app.get('/api/AHU',keystone.middleware.cors, apiHandlers3.getahupics);
 app.get('/api/cassettetext', keystone.middleware.cors, apiHandlers4.getcassette);
 app.get('/api/Cassette%20AC',keystone.middleware.cors, apiHandlers4.getcassettepics);
  app.get('/api/chillertext',keystone.middleware.cors, apiHandlers5.getchiller);
 app.get('/api/Chiller',keystone.middleware.cors, apiHandlers5.getchillerpics);
  app.get('/api/client',keystone.middleware.cors, apiHandlers6.getclient);
  app.get('/api/ducttext', keystone.middleware.cors, apiHandlers7.getduct);
 app.get('/api/Duct',keystone.middleware.cors, apiHandlers7.getductpics);
  app.get('/api/ductabetext',keystone.middleware.cors, apiHandlers8.getductable);
 app.get('/api/Ductable',keystone.middleware.cors, apiHandlers8.getductablepics);
  app.get('/api/packagetext', keystone.middleware.cors, apiHandlers9.getpackage);
  app.get('/api/Package', keystone.middleware.cors, apiHandlers9.getpackagepics);
  app.get('/api/paneltext',keystone.middleware.cors, apiHandlers10.getpanel);
  app.get('/api/Panel',keystone.middleware.cors,  apiHandlers10.getpanelpics);
 app.get('/api/splitext',keystone.middleware.cors,  apiHandlers11.getsplit);
  app.get('/api/Split%20AC',keystone.middleware.cors, apiHandlers11.getsplitpics);
 app.get('/api/vrftext', keystone.middleware.cors, apiHandlers12.getvrf);
 app.get('/api/Vrf', keystone.middleware.cors, apiHandlers12.getvrfpics);
 app.get('/api/product', keystone.middleware.cors,apiHandlers13.getproduct);
  app.get('/api/slider',keystone.middleware.cors, apiHandlers14.getslider);

};
