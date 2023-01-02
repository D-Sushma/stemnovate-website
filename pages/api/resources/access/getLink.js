import AWS from "aws-sdk"
import { decode, encode } from "hex-encode-decode"

const s3bucket = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  endpoint: "s3.us-east-2.amazonaws.com",
  signatureVersion: "v4",
  region: "us-east-2"
})

export default async function handle(req, res) {
  // try {
  const key = req.body.key
  if (key) {
    if (req.method == "POST") {
      try {
        var params = {
          Bucket: "stemnovateimages",
          Key: decode(key)
        }

        try {
          await s3bucket.headObject(params).promise()
          const signedUrl = s3bucket.getSignedUrl("getObject", {
            Bucket: "stemnovateimages",
            Key: decode(key),
            Expires: 60
          })
          res.status(200).send({
            code: "200",
            url: encode(signedUrl)
          })
        } catch (error) {
          if (error.name === "NotFound") {
            res.status(501).send({
              code: "501",
              url: "",
              message: "No data found"
            })
          } else {
            console.log("error", error)
            res.status(501).send({
              code: "501",
              url: "",
              message: "Second try something went to wrong"
            })
          }
        }
      } catch (error) {
        console.log("error", error)
        res.status(501).send({
          code: "501",
          url: "",
          message: "First try something went to wrong"
        })
      }
    } else {
      res.status(200).send({
        code: "201",
        message: "Bad Method"
      })
    }
  } else {
    res.status(200).send({ message: "Bad Method" })
  }

  //
}
