 var express		= require('express'),
 	db			= require('../models'),
	router		= express.Router();


router.get('/', (req, res) => {
	res.render('home');
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/overview', (req, res) => {
	db.Info.findOne({})
	.then( function(result) {
		console.log(result);
		res.render('overview', {info: result});
	})
});

router.get('/details', (req, res) => {
	res.render('details')
});

router.get('/workouts', (req, res) => {
	res.render('workouts')
});

router.get('/training', (req, res) => {
	res.render('training')
});

router.post('/create-user', (req,res) => {

	var info = {
		'userName': req.body.username,
		'password': req.body.password,
		'firstName': req.body.first_name,
		'middleName': req.body.middle_name,
		'lastName': req.body.last_name,
		'age': req.body.age,
		'stage': req.body.stage,
		'gender': req.body.gender
	}

	console.log(info)

	db.Info.findOneAndUpdate({}, info, {'new': true, upsert:true})
	.then( function(edited) {
		console.log(edited);
		res.redirect('/');
	})
	.catch( function(err) {
		res.send(err);
	});

	

});

router.post('/sign-in', (req,res) => {
	db.Info.findOne({})
	.then( function(result) {
		if (req.body.options) {
			if (req.body.options.login) {
				if(req.body.username==result['userName'] && req.body.password==result['password']){
					res.redirect('/overview');
				} else {
					res.redirect('/');
				}
			} else if (req.body.options.signup) {
				res.redirect('/signup');
			}
		}
	})

});


router.post('/lets-train', (req,res) => {
	if (req.body.options) {
		if(req.body.options.start) {
			var data = {
			'side': 1,
			'start': 1
			}
		} else if(req.body.options.stop){
			var data = {
			'side': 1,
			'start': 0
			}
		}

		console.log(data)

		db.Data.findOneAndUpdate({}, data, {'new': true, upsert:true})
		.then( function(edited) {
			console.log(edited);
			res.redirect('/');
		})
		.catch( function(err) {
			res.send(err);
		});

		db.Data.findOne({})
		.then( function(result) {
			console.log(result)
		});
	/*
		//while (req.body.options.start) {
			db.Data.findOne({})
			.then( function(result) {
				console.log(result['side'])
				if(result['start'] !== 1) {
					return
				}
				if(result['side'] == 1) {
					player.play('C:/Users/Owner/GIT/iot_parkinsons/assets/audio/right.mp3', function (err) {
   					if (err) throw err;
   					//console.log("Audio finished");
 					});
				} else if(result['side'] == 0) {
					player.play('C:/Users/Owner/GIT/iot_parkinsons/assets/audio/left.mp3', function (err) {
   					if (err) throw err;
   					//console.log("Audio finished");
 					});
				}
			})
			//sleep(10000);
			//wait(5000)
		//}
		*/
	}
	res.redirect('/training');
});

function wait(ms) {
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


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