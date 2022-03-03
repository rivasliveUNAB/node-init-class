const express = require('express');
const { getCharacters, getCharacterById } = require('./characters.controller');

const router = express.Router();

router.get('/', getCharacters);
router.get('/:id', getCharacterById);

module.exports = router;
