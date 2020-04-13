import express from 'express';
let router = express.Router();

import admin from 'firebase-admin';
import firebase from'firebase';
// import serviceAccount from '../covid-hotspot-tracker.json'


let serviceAccount = {
  "type": "service_account",
  "project_id": "covid-hotspot-tracker",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "private_key_id" : process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "client_x509_cert_url": process.env.client_x509_cert_url
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
