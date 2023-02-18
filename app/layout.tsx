import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-slate-300 min-h-screen'>
        <div className='max-w-[90rem] bg-white mx-auto shadow-md'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
