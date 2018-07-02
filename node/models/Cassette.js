var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/cassette',
		publicPath: '/cassette/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var CassetteText = new keystone.List('CassetteText');

CassetteText.add({
	Cassettetext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var CassettePics = new keystone.List('CassettePics');

CassettePics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
CassetteText.defaultColumns = 'Cassettetext';
CassetteText.register();

CassettePics.defaultColumns = 'Pics';
CassettePics.register();
