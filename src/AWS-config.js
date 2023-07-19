require ("dotenv").config()
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_KEY",
});
