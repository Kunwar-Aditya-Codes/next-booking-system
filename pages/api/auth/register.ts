import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password , phone , firstName , lastName , city } = req.body;

    //! Validation 
  }
};

export default handler;
