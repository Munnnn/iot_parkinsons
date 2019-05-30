var mongoose	=require('mongoose');

var statsSchema = new mongoose.Schema({
	correct: {
		type: Number
	},
	timeTotal: {
		type: Number
	}
})

var Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;