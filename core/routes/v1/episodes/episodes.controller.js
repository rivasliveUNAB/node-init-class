const axios = require('axios');

const getEpisodes = async (_, res) => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
    res.status(200).json({
      data: data?.results || [],
    });
  } catch (e) {
    res.status(500).json({
      message: 'Internal server error',
      code: 500,
      errors: e?.response?.data || e?.message || null,
      data: null,
    });
  }
};

const getEpisodeById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    res.status(200).json({ data: data || [] });
  } catch (e) {
    res.status(500).json({
      message: 'Internal server error',
      code: 500,
      errors: e?.response?.data || e?.message || null,
      data: null,
    });
  }
};

module.exports = {
  getEpisodes,
  getEpisodeById,
};
