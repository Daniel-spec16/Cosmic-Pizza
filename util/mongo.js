import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
const MONGODB_URL = process.env.MONGODB_URL

if (!MONGODB_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    console.log('cached connection established')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    console.log('non-cached connection established')
    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose
    })
  }

  
    cached.conn = await cached.promise
    console.log('establishing new connection')
 

  return cached.conn
}

export default dbConnect