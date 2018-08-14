var keystone = require('keystone');
var Types = keystone.Field.Types;

var Address = new keystone.List('Address');

Address.add({
	Text: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});



/**
 * Registration
 */
Address.defaultColumns = 'Address';
Address.register();


