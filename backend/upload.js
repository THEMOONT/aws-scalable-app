const AWS = require('aws-sdk');
const multer = require('multer');

const s3 = new AWS.S3();

const upload = multer({ storage: multer.memoryStorage() });

const uploadFile = (file) => {
    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: file.originalname,
        Body: file.buffer
    };
    return s3.upload(params).promise();
};

module.exports = { upload, uploadFile };
