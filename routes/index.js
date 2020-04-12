import express from 'express';
let router = express.Router();

import admin from 'firebase-admin';
import firebase from'firebase';

import serviceAccount from '../covid-hotspot-tracker-firebase-adminsdk-sk5lq-7ad8b5045e.json' ;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const citiesList= [{"cityId":1,"cityName":"mumbai"},{"cityId":1,"cityName":"pune"}];

router.get('/cities', function(req, res, next) {
  
  db.collection(" city-details").get()
  .then((snapshot) => {
  	let tempArr = [];
    snapshot.forEach((doc) => {
      tempArr.push(doc.data())
    });
    res.status(200).send({"data":tempArr});

  })
  .catch((err) => {
    console.log('Error getting documents', err);
    res.status(400).send({"err":err});
  });

});

router.post('/locations/data', function(req, res, next) {

	let locationRef = db.collection('locations');
	let query = locationRef.where('cityId', '==', req.body.cityId).get()
	  .then(snapshot => {
	  	let tempArr = [];
	    snapshot.forEach(doc => {
	      tempArr.push(doc.data())
	    });
	    res.status(200).send({"data":tempArr});
	  })
	  .catch(err => {
	    console.log('Error getting documents', err);
	    res.status(400).send({"err":err});
	  });
  
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



export default router;
