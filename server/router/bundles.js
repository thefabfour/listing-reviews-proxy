const router = require('express').Router();
const axios = require('axios')
const { service1, service2, service3 } = require('../config/services.js');


router.use('/service1.js', (req, res) => {
  axios.get(`${service1.url}/${service1.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

router.use('/service2.js', (req, res) => {
  axios.get(`${service2.url}/${service2.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

router.use('/service3.js', (req, res) => {
  axios.get(`${service3.url}/${service3.bundle}`)
    .then((response) => {
      res.type('.js');
      res.send(response.data);
    });
});

module.exports = router;