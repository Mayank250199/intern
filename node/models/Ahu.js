var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/ahu',
		publicPath: '/ahu/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var AhuText = new keystone.List('AhuText');

AhuText.add({
	Ahutext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var AhuPics = new keystone.List('AhuPics');

AhuPics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
AhuText.defaultColumns = 'Ahutext';
AhuText.register();

AhuPics.defaultColumns = 'Pics';
AhuPics.register();
