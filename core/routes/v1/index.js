const express = require('express');
const episodesRoutes = require('./episodes/episodes.router');
const characterRoutes = require('./characters/characters.router');

const router = express.Router();

router.use('/episodes', episodesRoutes); // /episodes, /episodes/old-episodes
router.use('/characters', characterRoutes); // /episodes, /episodes/old-episodes

module.exports = router;
