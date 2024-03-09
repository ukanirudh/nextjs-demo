import { ReactElement } from 'react';
import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}