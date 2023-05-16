import mongoose from 'mongoose'

const URI = 'mongodb://root:root@127.0.0.1:27017/telegrom'

const dbConnection = async () => {
  try {
    await mongoose.connect(`${URI}?authSource=admin&readPreference=primary`)
    console.log('DB online')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de iniciar la base de datos')
  }
}

export default dbConnection
