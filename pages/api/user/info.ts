import { NextApiRequest, NextApiResponse } from 'next';
import apiVerify from '@/middleware/apiVerify';
import prisma from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { id } = req.user;
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        city: true,
        phone: true,
      },
    });
    return res.status(200).json(user);
  }

  return res.status(405).json({ message: 'Method not allowed' });
};

export default apiVerify(handler);
