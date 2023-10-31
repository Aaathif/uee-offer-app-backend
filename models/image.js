const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  data: {type: Buffer, required: true},
  contentType: {type: String, required: true},
});

module.exports = mongoose.model('Image', imageSchema);




  // const imageSchema = new mongoose.Schema({
  //   name: String,
  //   path: String,
  // });
  
  // const Image = mongoose.model('Image', imageSchema);
  
  // module.exports = Image;