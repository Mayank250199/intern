var keystone = require('keystone');
var Types = keystone.Field.Types;

var Work = new keystone.List('Work');

Work.add({
    Installation: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
    Service: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
    Supply: { type: Types.Text, initial: true, required: true, min: 30, max:100 },
});


/**
 * Registration
 */
Work.defaultColumns = 'Work';
Work.register();
