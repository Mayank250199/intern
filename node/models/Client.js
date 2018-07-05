var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('uploads/client'),
		publicPath: '/public/uploads/',
	}
});

var storage = new keystone.Storage({
  adapter:keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('uploads/client'),
		publicPath: '/client/',
	},
  schema: {
    originalname: true,
    url: true,
  },
});
var Client = new keystone.List('Client');

Client.add({
	name: { type: Types.Text,initial: true, required: true,min: 4, max: 50 },
	Pics:{ type: Types.CloudinaryImage, initial: true, required: true}
});
Client.defaultColumns = 'name,Pics';
Client.register();
