const mongoose = require('mongoose')

const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    throw new Error('mongoDB無法連線')
  }
}

module.exports = connectMongoose
