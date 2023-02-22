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
      <body className='min-h-screen mx-auto shadow-md text-slate-200 bg-slate-900 md:px-[4rem]'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
