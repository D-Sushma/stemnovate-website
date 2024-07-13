import prisma from "~/lib/prisma"
import formidable from "formidable"
import fs from "fs"
import Promise from "promise"
import { Prisma } from "@prisma/client"
import AWS from "aws-sdk"
export const config = {
  api: {
    bodyParser: false
  }
}
const s3bucket = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})
function getExtension(filename) {
  var i = filename.lastIndexOf(".")
  return i < 0 ? "" : filename.substr(i)
}
export default async function handle(req, res) {
  try {
    if (req.method === "POST") {
      const data = await new Promise((resolve, reject) => {
        const form = formidable({ multiples: true })
        form.parse(req, (err, fields, files) => {
          if (err) reject({ ERROR: err })
          resolve({ err, fields, files })
        })
      })
      const campaignId = data.fields.campaignId
      const UserId = data.fields.UserId
      const fileTypes = data.fields.fileType
      const findUser = await prisma.form_details.findMany({
        where: {
          user_id: parseInt(UserId),
          campaign_id: parseInt(campaignId)
        }
      })
      if (findUser.length === 0) {
        const files = data.files
        var allfilesKeys = Object.keys(files)
        var allfilesValues = Object.values(files)
        for (let index = 0; index < allfilesKeys.length; index++) {
          const filekey = allfilesKeys[index]
          const imageFile = allfilesValues[index]
          const filename = new Date().getTime()
          const ext = getExtension(imageFile.originalFilename)
          const imagePath = imageFile.filepath
          const fullname = `${filename}${ext}`
          const image = await fs.readFileSync(imagePath)
          var params = {
            Bucket: "stemnovateimages",
            Key: fullname,
            Body: image,
            ContentType: imageFile.mimetype,
            ACL: "public-read"
          }
          const addFile = await prisma.form_details.create({
            data: {
              user_id: parseInt(UserId),
              campaign_id: parseInt(campaignId),
              input_name: filekey,
              input_value: fullname,
              fileType: fileTypes[filekey]
            }
          })
          if (addFile) {
            try {
              s3bucket.upload(params, function (err, data) {
                if (err) {
                  res.status(500).json({ error: true, Message: err })
                } else {
                }
              })
            } catch (e) {}
          }
        }
        const simpleValue = data.fields
        var allKeys = Object.keys(simpleValue)
        var allValues = Object.values(simpleValue)
        const notCheck = ["campaignId", "fileType", "UserId"]
        const restrictInput = new Set(notCheck)
        for (let index = 0; index < allKeys.length; index++) {
          const key = allKeys[index]
          const value = allValues[index]
          if (!restrictInput.has(key)) {
            const addForm = await prisma.form_details.create({
              data: {
                user_id: parseInt(UserId),
                campaign_id: parseInt(campaignId),
                input_name: key,
                input_value: value,
                fileType: fileTypes[key]
              }
            })
          }
        }
        const checkUser = await prisma.customers.findUnique({
          where: {
            id: parseInt(UserId)
          },
          select: {
            firstname: true,
            lastname: true,
            email: true
          }
        })
        const fullName = checkUser.firstname + " " + checkUser.lastname
        res.status(200).send({
          code: "200",
          message: "Form submitted Successfully",
          userData: { email: checkUser.email, name: fullName }
        })
      } else {
        res.status(201).send({
          code: "201",
          message: "User already exist"
        })
      }
    } else {
      res.status(401).send({ code: "401", message: "Bed Request" })
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
      }
    }
    throw e
  }
}
