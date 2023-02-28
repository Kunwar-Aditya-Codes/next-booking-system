import { NextApiRequest, NextApiResponse } from 'next';
import apiVerify from './apiVerify';
import { useRouter } from 'next/router';

const adminVerify = async (req: NextApiRequest, res: NextApiResponse) => {
  const router = useRouter();

  if (req.user.role !== 'admin') {
    router.push('/');
  }

  return res.status(200).json({ message: 'Admin verified' });
};

export default apiVerify(adminVerify);
