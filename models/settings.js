var mongoose	=require('mongoose');

var settingsSchema = new mongoose.Schema({
	triningOn: {
		type:Boolean
	},
	workout: {
		type: String
	},
	level: {
		type: Number
	}
});

var Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;