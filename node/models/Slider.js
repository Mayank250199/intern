var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'uploads/slider',
		publicPath: '/slider/',
	},
	schema: {
    originalname: true,
    url: true,
  },
});

var Slider = new keystone.List('Slider');

Slider.add({
	Slidername: { type: Types.Text, initial: true, required: true, min: 0, max:30 },
  description: { type: Types.Text, initial: true, required: true, min: 0, max:100 },
  sliderimage:{ type: Types.CloudinaryImage, initial: true, required: true}
});


/**
 * Registration
 */
Slider.defaultColumns = 'Slidername,images,description,sliderimage';
Slider.register();
