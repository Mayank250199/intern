var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/product',
		publicPath: '/product/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var storageslider = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/product/slider',
		publicPath: '/product/slider',
	},
	schema: {
    originalname: true,
    url: true,
  },
});
var Product = new keystone.List('Product');

Product.add({
	Productname: { type: Types.Text, initial: true, required: true, min: 0, max:30 },
  images:{ type: Types.CloudinaryImage, initial: true, required: true},
  description: { type: Types.Text, initial: true, required: true, min: 0, max:300 },
});


/**
 * Registration
 */
Product.defaultColumns = 'Productname,images,description';
Product.register();
