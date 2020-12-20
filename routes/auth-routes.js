const router = require('express').Router();

const { testing } = require('../controllers/auth-controller');

router.get('/testing', testing);

module.exports = router;