import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

const apiVerify =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const bearer = req.headers['authorization'];

    if (!bearer) {
      return res.status(401).json({ message: 'Unauthorized (No bearer)' });
    }

    const token = bearer.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized (No token)' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

      if (!decoded) {
        return res.status(401).json({ message: 'Unauthorized (decoded)' });
      }

      req.user = decoded;
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    return handler(req, res);
  };

export default apiVerify;
