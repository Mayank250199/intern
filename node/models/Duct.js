var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/duct',
		publicPath: '/duct/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var DuctText = new keystone.List('DuctText');

DuctText.add({
	Ducttext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var DuctPics = new keystone.List('DuctPics');

DuctPics.add({
	Pics:{ type: Types.CloudinaryImage, initial: true, required: true}
});


/**
 * Registration
 */
DuctText.defaultColumns = 'Ducttext';
DuctText.register();

DuctPics.defaultColumns = 'Pics';
DuctPics.register();
