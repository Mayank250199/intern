// var keystone = require('keystone');
// var Types = keystone.Field.Types;
//
// var storage = new keystone.Storage({
// 	adapter: keystone.Storage.Adapters.FS,
// 	fs: {
// 		path: 'uploads/product',
// 		publicPath: '/uploads/product/',
// 	},
// 	schema: {
//     originalname: true,
//     url: true,
//   },
// });
//
// var storageslider = new keystone.Storage({
// 	adapter: keystone.Storage.Adapters.FS,
// 	fs: {
// 		path: 'uploads/product/slider',
// 		publicPath: '/uploads/product/slider',
// 	},
// 	schema: {
//     originalname: true,
//     url: true,
//   },
// });
// var Product = new keystone.List('Product');
//
// Product.add({
// 	Productname: { type: Types.Text, initial: true, required: true, min: 0, max:30 },
//   images:{ type: Types.File, initial: true, required: true, storage: storage },
//   description: { type: Types.Text, initial: true, required: true, min: 0, max:100 },
//   sliderimage:{ type: Types.File, initial: true, required: true, storage: storageslider},
// });
//
//
// /**
//  * Registration
//  */
// Product.defaultColumns = 'Productname,images,description,sliderimage';
// Product.register();
