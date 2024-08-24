const express = require('express')
const usernamesController = require('../controllers/usernamesController')

const router = express.Router()

router.get('/', usernamesController.getUsernames)
router.get('/search', usernamesController.searchUsernamesGet)
router.get('/delete/confirm', usernamesController.deleteUsernamesConfirmGet);
router.get('/delete/', usernamesController.deleteUsernamesGet);

router.get('/new', usernamesController.createUsernameGet) 
router.post('/new', usernamesController.createUsernamePost) 

module.exports = router