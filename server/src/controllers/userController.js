const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ address: req.params.address });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateWatchlist = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { address: req.params.address },
      { $set: { watchlist: req.body.watchlist } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getWatchlist = async (req, res) => {
  try {
    const user = await User.findOne({ address: req.params.address });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOwned = async (req, res) => {
  try {
    const user = await User.findOne({ address: req.params.address });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.owned);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

eports.updateOwned = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { address: req.params.address },
      { $set: { owned: req.body.owned } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
