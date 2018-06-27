var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/about',
		publicPath: '/uploads/about/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var AboutText = new keystone.List('AboutText');

AboutText.add({
	Abouttext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var AboutPics = new keystone.List('AboutPics');

AboutPics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
AboutText.defaultColumns = 'Abouttext';
AboutText.register();

AboutPics.defaultColumns = 'Pics';
AboutPics.register();
