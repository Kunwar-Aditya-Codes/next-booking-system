import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.location.createMany({
    data: [{ name: 'New York' }, { name: 'London' }, { name: 'Paris' }],
  });
  res.status(200).json({ message: 'Locations created' });
};

export default handler;
