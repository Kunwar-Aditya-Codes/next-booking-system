import { NextApiRequest as OriginalNextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest extends OriginalNextApiRequest {
    user?: any;
  }
}
