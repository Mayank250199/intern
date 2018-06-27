var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/chiller',
		publicPath: '/uploads/chiller/',
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
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
ChillerText.defaultColumns = 'Chillertext';
ChillerText.register();

ChillerPics.defaultColumns = 'Pics';
ChillerPics.register();
