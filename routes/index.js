import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const citiesList= [{"cityId":1,"cityName":"mumbai"},{"cityId":1,"cityName":"pune"}];

router.get('/cities', function(req, res, next) {
  res.status(200).send({"data":citiesList});
});

router.post('/hotspot/data/citywise', function(req, res, next) {
  res.status(200).send({"data":[]});
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



export default router;
