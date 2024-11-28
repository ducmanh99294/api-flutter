const userRoutes = require('./routes/userRoutes'); // P56c6
const express = require('express');
const { default: mongoose } = require('mongoose');
const path  = require('path');  
const app = express();
const userModel = require('./models/userModel'); // P56c6
app.use(express.json());

app.use('/resource/images', express.static(path.join(__dirname,"resource", 'images')));
app.use('/api/users', userRoutes); // P4517

mongoose 
.connect("mongodb+srv://nguyenducmanh1809:manh1234@cluster0.1ya4y.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Cấu hình cổng và khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

