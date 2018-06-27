var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/package',
		publicPath: '/uploads/package/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var PackageText = new keystone.List('PackageText');

PackageText.add({
	Packagetext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var PackagePics = new keystone.List('PackagePics');

PackagePics.add({
	Pics:{ type: Types.File, initial: true, required: true, storage: storage }
});


/**
 * Registration
 */
PackageText.defaultColumns = 'Packagetext';
PackageText.register();

PackagePics.defaultColumns = 'Pics';
PackagePics.register();
