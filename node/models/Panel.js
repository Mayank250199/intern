var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/panel',
		publicPath: '/uploads/panel/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var PanelText = new keystone.List('PanelText');

PanelText.add({
	Paneltext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var PanelPics = new keystone.List('PanelPics');

PanelPics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
PanelText.defaultColumns = 'Paneltext';
PanelText.register();

PanelPics.defaultColumns = 'Pics';
PanelPics.register();