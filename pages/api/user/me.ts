import { NextApiRequest, NextApiResponse } from 'next';
import apiVerify from '@/middleware/apiVerify';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'GET' });
  }
};

export default apiVerify(handler);
