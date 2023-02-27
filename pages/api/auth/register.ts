import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password, phone, firstName, lastName, city } = req.body;

    if (!email || !password || !phone || !firstName || !lastName || !city) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // if (password.length < 6) {
    //   return res
    //     .status(400)
    //     .json({ message: 'Password must be at least 6 characters long' });
    // }

    const userWithEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone,
        city,
      },
    });

    return res.status(200).json({ message: 'Success register!' });
  }

  return res.status(405).json({ message: 'Unavailable Endpoint' });
};

export default handler;
