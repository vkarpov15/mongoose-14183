import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
 
type ResponseData = {
  message: string
}

mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test');
const TestModel = mongoose.model('Test', mongoose.Schema({ name: String }));
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js! ' + mongoose.version, doc: await TestModel.findOne() })
}
