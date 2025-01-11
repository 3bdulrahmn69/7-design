import { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import { Helmet } from 'react-helmet';

const Meeting = () => {
  const [isDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-primary`}>
      <Helmet>
        <title>Book a Meeting - Seven Studio Design</title>
        <meta
          name="description"
          content="Book a call with Seven Studio Design to create your iconic brand. Limited spots available for logo design and brand identity services."
        />
        <meta
          name="keywords"
          content="logo design, brand identity, design services, Seven Studio Design, book a meeting"
        />
        <meta name="author" content="Seven Studio Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/meeting" />
      </Helmet>
      <h1 className="text-center py-4">
        Only 3 Spots Are Available This Month
      </h1>
      <div className="min-h-screen meeting rounded-t-[3rem] overflow-hidden">
        <header className="bg-gradient-to-b from-primaryLightWhite to-transparent w-full py-8">
          <nav className="flex flex-col items-center justify-center gap-2 pt-4 pb-16">
            <div className="flex items-center gap-2 pb-4">
              <Logo />
              <span className="text-2xl font-bold text-center">
                Seven Studio Design
              </span>
            </div>
            <hr className="h-[1px] w-1/2" aria-hidden="true" />
          </nav>
        </header>
        <main>
          <div>
            <h1 className="text-center text-6xl font-semibold">
              Hop on a call with us
            </h1>
          </div>
          <div className="min-h-screen"></div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4 p-4 justify-center items-center max-w-2xl mx-auto text-center text-lg font-light">
              <p>
                We&apos;re currently accepting new clients for our logo design
                and brand identity services this month!
              </p>
              <p>Seats are limited, so act fast!</p>
              <p>
                To apply, book a call with our team through this form, and
                we&apos;ll guide you through our branding solutions and how to
                get started.
              </p>
              <p>Book now and create your iconic brand!</p>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <p className="text-center py-4">
          © 2025 Seven Studio Design limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Meeting;
