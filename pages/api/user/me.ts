import { NextApiRequest, NextApiResponse } from 'next';
import apiVerify from '@/middleware/apiVerify';
import prisma from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    
  }

  return res.status(405).json({ message: 'Method not allowed' });
};

export default apiVerify(handler);
