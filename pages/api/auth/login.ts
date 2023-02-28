import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
      return res.status(401).json({ message: 'Invalid Credential' });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userWithEmail.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const token = jwt.sign(
      { id: userWithEmail.id.toString() },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    res.setHeader(
      'Set-Cookie',
      `token=${token}; path=/; max-age=3600;`
    );

    const user = await prisma.user.findUnique({
      where: { id: userWithEmail.id },
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

  return res.status(405).json({ message: 'Unavailable Endpoint' });
};

export default handler;
