var mongoose	=require('mongoose');

var dataSchema = new mongoose.Schema({
	timestamp: {
		type: Date,
		default: Date.now()
	},
	side: {
		type: Number
	},
	start: {
		type: Number
	}
});

var Data = mongoose.model('Data', dataSchema);

module.exports = Data;