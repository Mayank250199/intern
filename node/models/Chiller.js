var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/chiller',
		publicPath: '/chiller/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var ChillerText = new keystone.List('ChillerText');

ChillerText.add({
	Chillertext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var ChillerPics = new keystone.List('ChillerPics');

ChillerPics.add({
	Pics:{ type: Types.CloudinaryImage, initial: true, required: true}
});


/**
 * Registration
 */
ChillerText.defaultColumns = 'Chillertext';
ChillerText.register();

ChillerPics.defaultColumns = 'Pics';
ChillerPics.register();
