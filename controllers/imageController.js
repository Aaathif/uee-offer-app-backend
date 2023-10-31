const Image = require('../models/image.js');

// const upload = multer();

// app.post('/images', upload.single('image'), async (req, res, next) => {
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: 'No file provided.' });
//   }
//   const image = new Image({
//     name: `${uuidv4()}.${req.file.mimetype.split('/')[1]}`,
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   });

//   try {
//     await image.save();
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ success: false, message: error.message });
//   }
//   return res.status(201).json({
//     success: true,
//     message: 'Image created successfully.',
//     imageName: image.name,
//   });
// },
// );


// exports.create = async (req, res, next) => {
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: 'No file provided.' });
//   }
//   const image = new Image({
//     name: `${uuidv4()}.${req.file.mimetype.split('/')[1]}`,
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   });

//   try {
//     await image.save();
//   } catch (error) {
//     console.log(error); 
//     return res.status(400).json({ success: false, message: error.message });
//   }
//   return res.status(201).json({
//     success: true,
//     message: 'Image created successfully.',
//     imageName: image.name,
//   });
// };


// app.get('/images/:name', async (req, res) => {
//   const { imagename } = req.params;
//   const image = await Image.findOne({ name });
//   if (!image) {
//     return res.status(404).json({ success: false, message: 'Image not found.' });
//   }
//   res.set('Content-Type', image.contentType);
//   res.send(image.data);
// });


exports.find = async (req, res) => {
  const { imagename } = req.params;
  const image = await Image.findOne({ name });
  if (!image) {
    return res.status(404).json({ success: false, message: 'Image not found.' });
  }
  res.set('Content-Type', image.contentType);
  res.send(image.data);
};




// Define routes for handling file uploads
exports.save = (req, res) => {
  const newImage = new Image({
    name: req.file.filename,
    path: req.file.path,
  });

  newImage.save()
    .then(image => res.json(image))
    .catch(err => res.status(500).json({ error: err.message }));
};

// app.post('/upload', upload.single('image'), (req, res) => {
//   const newImage = new Image({
//     name: req.file.filename,
//     path: req.file.path,
//   });

//   newImage.save()
//     .then(image => res.json(image))
//     .catch(err => res.status(500).json({ error: err.message }));
// });


