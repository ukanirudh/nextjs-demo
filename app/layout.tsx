import { ReactElement } from 'react';
import './globals.css'

/* Reserved name */
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

/* Reserved name */
export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}