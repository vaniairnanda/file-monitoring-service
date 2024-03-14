const express = require('express');
const fileController = require('./controllers/fileController');
const app = express();
const Multer = require('multer'); 
const storage = Multer.memoryStorage();

const limits = {
  fileSize: 3 * 1024 * 1024 // Limit file size to 3MB
};

const upload = Multer({
  storage: storage,
  limits: limits
});


app.post('/upload', upload.array('files'), fileController.uploadFile);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});