const fs = require('fs');
const AWS = require('aws-sdk');
const ID = 'Your ID here';
const SECRET = 'Your secret here';
const BUCKET_NAME = 'bucket name';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'shiva.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    s3.upload(params, function(err, data) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('shiva.jpeg');

