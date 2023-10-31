const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const multer = require('multer');
const Image = require('./models/image');
const { v4: uuidv4 } = require('uuid');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
app.use('/', require('./routes/driverRoute'));
app.use('/', require('./routes/vehicleRoute'));

// app.use('/', upload.single('image'), require('./routes/imageRoute'));




// ---------------------------- for image upload -------------------------------- //

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/upload', upload.single('image'), (req, res) => {
  const newImage = new Image({
    name: req.file.filename,
    path: req.file.path,
  });

  newImage.save()
    .then(image => res.json(image))
    .catch(err => res.status(500).json({ error: err.message }));
});

// ------------------------------ for image upload ---------------------------------- //



const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
