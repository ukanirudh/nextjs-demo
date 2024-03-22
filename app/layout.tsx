import { ReactElement } from 'react';
import './globals.css'
import MainHeader from '@/components/appComponents/main-header';

/* Reserved name */
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

/* Reserved name */
export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}