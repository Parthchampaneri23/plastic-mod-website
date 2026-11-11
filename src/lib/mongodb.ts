import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseWebsiteCache: MongooseCache | undefined;
}

let cached = global.mongooseWebsiteCache;

if (!cached) {
  cached = global.mongooseWebsiteCache = { conn: null, promise: null };
}

export async function connectDB(): Promise<typeof mongoose> {
  const uri =
    process.env.MONGODB_URI ||
    MONGODB_URI ||
    'mongodb+srv://parthchampanerirndtechnosoft_db_user:qwaszx123@cluster0.fn1bc3b.mongodb.net/plastic_mold_db?retryWrites=true&w=majority';

  if (!uri) {
    throw new Error('Please define MONGODB_URI in environment variables');
  }

  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(uri, {
      bufferCommands: false,
    });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}

