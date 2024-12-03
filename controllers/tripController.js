const tripModel = require('../models/tripModel');

// Lấy tất cả các trip
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await tripModel.find();  // Lấy tất cả dữ liệu từ bảng Tour
    res.json(trips);
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
};

