//const AWS = require('aws-sdk');
const User = require('../models/user');
const UploadedFiles = require('../models/uploadedFiles');

// Configure AWS SDK
// AWS.config.update({
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_AWS_REGION'
// });

// Create S3 instance
// const s3 = new AWS.S3();

exports.uploadFile = async (req, res) => {
  const userId = req.headers['user-id'];
  const files = req.files;

  console.log(req.files)

  if (!userId || !files) {
    return res.status(400).send('Invalid request');
  }

  try {
    const { quota_allocation, current_usage } = await User.getQuotaUsage(userId);
    let totalSize = 0;

    for (const file of files) {
      totalSize += file.size;
    }

    // Enforce quota before allowing upload
    if (totalSize + current_usage > quota_allocation) {
      return res.status(403).send('User quota limit exceeded');
    }

    const uploadPromises = files.map(async file => {
     /** Mocked AWS S3 upload   
      const params = {
        Bucket: 'BUCKET_NAME',
        Key: `${userId}/${uuidv4()}_${file.originalname}`,
        Body: file.buffer,
      };

      await s3.upload(params).promise();
    */ 

      const fileUrl = 'sample-url'; // mock url

      // Store upload result in DB
      try {
        await UploadedFiles.uploadedFiles(userId, file.originalname, fileUrl);
        await User.updateUsage(userId, file.size);
      } catch (error) {
        console.log(error)
        res.status(500).send('Failed to upload file')
      }
     
      return `File ${file.originalname} uploaded successfully`;
    });

    const results = await Promise.all(uploadPromises);
    res.status(200).send(results);
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).send('Internal Server Error');
  }
};