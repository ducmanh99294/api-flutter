const userRoutes = require('./routes/userRoutes');
const express = require('express');
const { default: mongoose } = require('mongoose');
const path  = require('path');  
const app = express();
app.use(express.json());

app.use('/resource/images', express.static(path.join(__dirname,"resource", 'images')));
app.use('/api/users', userRoutes); 

mongoose 
  .connect("mongodb+srv://nguyenducmanh1809:manh1234@cluster0.1ya4y.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Cấu hình cổng và khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

