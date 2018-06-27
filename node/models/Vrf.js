var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/vrf',
		publicPath: '/uploads/vrf/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var VrfText = new keystone.List('VrfText');

VrfText.add({
	Vrftext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var VrfPics = new keystone.List('VrfPics');

VrfPics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
VrfText.defaultColumns = 'Vrftext';
VrfText.register();

VrfPics.defaultColumns = 'Pics';
VrfPics.register();
