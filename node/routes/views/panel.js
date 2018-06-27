var keystone = require('keystone');
var PanelText = keystone.list('PanelText');
var PanelPics = keystone.list('PanelPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'panel';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.panelSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'panel' }, function (next) {

    var newPanelText = new PanelText.model();
    var updater = newPanelText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'paneltext',
      errorMessage: 'There was a problem submitting your panel:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.panelSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'panel' }, function (next) {

    var newPanelPics = new PanelPics.model();
    var updater = newPanelPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'panelpics',
      errorMessage: 'There was a problem submitting your panel:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.panelSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('panel');
};
