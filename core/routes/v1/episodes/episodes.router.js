const express = require('express');
const { getEpisodes, getEpisodeById } = require('./episodes.controller');

const router = express.Router();

router.get('/', getEpisodes);
router.get('/:id', getEpisodeById);

module.exports = router;
