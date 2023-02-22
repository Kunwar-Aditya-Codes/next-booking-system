import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-slate-300 min-h-screen'>
        <div className='max-w-[90rem]  mx-auto shadow-md text-slate-200 bg-slate-900'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
