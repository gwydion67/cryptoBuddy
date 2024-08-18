const Token = require('../models/Token');

exports.addToken = async (req, res) => {
  try {
    const token = new Token(req.body);
    await token.save();
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getToken = async (req, res) => {
  try {
    const token = await Token.find({ address: req.params.address });
    if (!token) return res.status(404).json({ message: 'Token not found' });
    res.json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.find();
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
