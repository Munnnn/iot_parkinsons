var mongoose	=require('mongoose');

var infoSchema = new mongoose.Schema({
	userName: {
		type: String
	},
	password: {
		type: String
	},
	firstName: {
		type: String
	},
	middleName: {
		type: String
	},
	lastName: {
		type: String
	},
	gender: {
		type: String
	},
	age: {
		type: Number
	},
	stage: {
		type: Number
	}
})

var Info = mongoose.model('Info', infoSchema);

module.exports = Info;