var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Marquee = new keystone.List('Marquee');

Marquee.add({
	marqueetext: { type: Types.Text,initial: true, required: true,min: 4, max: 50 }
});




/**
 * Registration
 */
Marquee.defaultColumns = 'marqueetext';
Marquee.register();
