var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/ductable',
		publicPath: '/ductable/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var DuctableText = new keystone.List('DuctableText');

DuctableText.add({
	Ductabletext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var DuctablePics = new keystone.List('DuctablePics');

DuctablePics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
DuctableText.defaultColumns = 'Ductabletext';
DuctableText.register();

DuctablePics.defaultColumns = 'Pics';
DuctablePics.register();
