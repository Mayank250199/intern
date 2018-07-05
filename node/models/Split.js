var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/split',
		publicPath: '/split/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var SplitText = new keystone.List('SplitText');

SplitText.add({
	Splittext: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});

var SplitPics = new keystone.List('SplitPics');

SplitPics.add({
	Pics:{ type: Types.CloudinaryImage, initial: true, required: true}
});


/**
 * Registration
 */
SplitText.defaultColumns = 'Splittext';
SplitText.register();

SplitPics.defaultColumns = 'Pics';
SplitPics.register();
