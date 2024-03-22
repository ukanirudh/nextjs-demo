import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1 className="h1 mt-10 mb-10">Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
      <p>
        <Link href='/meals'>Meals</Link>
      </p>
      <p>
      < Link href='/meals/share'>Share Meal</Link>
      </p>
      <p>
        <Link href='/community'>Community</Link>
      </p>
    </main>
  );
}