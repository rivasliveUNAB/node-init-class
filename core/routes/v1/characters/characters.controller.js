const axios = require('axios');

const getCharacters = async (_, res) => {
  try {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
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

const getCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    res.status(200).json({
      data: data || [],
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

module.exports = {
  getCharacters,
  getCharacterById,
};
