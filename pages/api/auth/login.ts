import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userWithEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (!userWithEmail) {
      return res
        .status(400)
        .json({ message: 'User with this email does not exist' });
    }
  }
};

export default handler;
