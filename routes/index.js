 var express		= require('express'),
 	db			= require('../models'),
	router		= express.Router();


router.get('/', (req, res) => {
	res.render('home');
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/details', (req, res) => {
	res.render('details')
});

/*
router.post('/set-color', (req,res) => {

db.Settings.findOne({})
.then( function(result) {
	var setting = {
		'lightColor': req.body.color,
		'lightIsOn': true
	}

	if (req.body.options) {
		if (req.body.options.setAsDefault) {
			setting['defaultColor'] = req.body.color;
		} else if (req.body.options.changeToDefault) {
			setting['lightColor'] = result['defaultColor']; //default color
		} else if (req.body.options.turnOff || req.body.color == '000000') {
			setting['lightColor'] = '000000';
			setting['lightIsOn'] = false;
		}
	}

	return db.Settings.findOneAndUpdate({}, setting, {'new': true, upsert: true})
})
.then( function(edited) {
	console.log(edited);
	res.redirect('/');
}) 
.catch( function(err) {
	res.send(err);
	});
});

router.post('/configure', (req, res) => {
	db.Settings.findOneAndUpdate({}, req.body.setting, {'new': true, upsert: true})
	.then(function(edited) {
		console.log(edited);
		res.redirect('/');
	})
	.catch( function(err) {
		res.send(err);
	});
});

*/
/*
router.get('/seed/:temp/:hum/:bright', (req,res) => {
	var seed = {
		temperature: req.params.temp,
		humidity: req.params.hum,
		brightness: req.params.bright
	}

	db.Data.create(seed)
	.then (function(newData) {
		res.redirect('/details');
	})
	.catch (function(err) {
		res.send(err);
	});
})

router.get('/seedStats', (req,res) => {
	var seed = {
		avgTemperature: 32,
		avgHumidity: 11,
		avgBrightness: 721,
		timeInHot: 20,
		timeInCold: 60,
		timeInDry: 80,
		timeInHumid: 8,
		timeOn: 59,				
		timeTotal: 100
	}
	db.Stats.findOneAndUpdate({}, seed, {'new': true, upsert: true})
	.then(function(stats) {
		console.log(stats);
		res.redirect('/')
	})
	.catch( function(err) {
		res.send(err);
	})
});
*/

module.exports = router;