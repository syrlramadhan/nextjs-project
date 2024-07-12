const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

mongoose.connect('mongodb://localhost:27017/real-estate')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    if (err.name === 'MongoNetworkError') {
      console.error('Error connecting to MongoDB: Network error');
    } else if (err.name === 'MongoTimeoutError') {
      console.error('Error connecting to MongoDB: Connection timeout');
    } else {
      console.error('MongoDB connection error:', err.message);
    }
  });

const propertySchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  address: String,
  bedrooms: Number,
  bathrooms: Number,
  description: String,
  photo: String
});

const Property = mongoose.model('Property', propertySchema);

app.post('/api/add-property', upload.single('photo'), async (req, res) => {
  try {
    const {
      name,
      type,
      price,
      address,
      bedrooms,
      bathrooms,
      description
    } = req.body;

    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newProperty = new Property({
      name,
      type,
      price,
      address,
      bedrooms,
      bathrooms,
      description,
      photo
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ message: 'Failed to add property' });
  }
});

app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ message: 'Failed to fetch properties' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
