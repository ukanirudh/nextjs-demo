import Link from 'next/link';
import PageModule from '@/app/page.module.css';
import ImageSlideshow from '@/components/slideShow/slideShow';

export default function Home() {
  return (
    <>
    <header className={PageModule.header}>
      <div className={PageModule.slideshow}>
        <ImageSlideshow />
      </div>
      <div>
        <div className={PageModule.hero}>
          <h1>Next level food for foodies</h1>
          <p>Tast and share food from all over the world.</p>
        </div>
        <div className={PageModule.cta}>
          <Link href='/community'> Join the community</Link>
          <Link href='/meals'> Explore meals</Link>
        </div>
      </div>
    </header>
    <main>
      <section className={PageModule.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={PageModule.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}