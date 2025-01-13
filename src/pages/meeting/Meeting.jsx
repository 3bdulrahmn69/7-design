import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { WistiaPlayer } from '@wistia/wistia-player-react';
import Logo from '../../components/Logo';
import Calendly from './components/Calendly';
import Footer from '../../components/Footer';

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
    <div>
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
      <h1 className="text-center py-4 bg-primary">
        Only 3 Spots Are Available This Month
      </h1>
      <div className="h-10 w-full bg-primary">
        <div className="h-10 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-t-full"></div>
      </div>
      <div className="grid-bg overflow-hidden">
        <header className="bg-gradient-to-b from-primaryLightWhite dark:from-primaryDarkBlack to-transparent">
          <nav className="flex flex-col items-center justify-center gap-2 pt-4 pb-16">
            <div className="flex items-center gap-2 pb-4">
              <Logo />
              <span className="text-2xl font-bold text-center">
                Seven Studio Design
              </span>
            </div>
            <hr
              className="h-[1px] bg-secondary-text border-none w-1/2"
              aria-hidden="true"
            />
          </nav>
        </header>
        <main>
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
          <div>
            <h1 className="text-center text-6xl font-semibold">
              Hop on a call with us
            </h1>
          </div>
          <div className="relative flex flex-col md:flex-row gap-4 items-center md:items-start justify-center py-8">
            <div className="absolute w-4/6 h-4/6 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-30"></div>
            <div className="w-11/12 md:w-1/3 z-10">
              <WistiaPlayer
                mediaId="v8g9mwx7d6"
                autoplay={false}
                playerColor="#feda00"
                volume={0.5}
                bigPlayButton={true}
                roundedPlayer={0}
              />
            </div>
            <div className="w-full md:w-1/3 z-10">
              <Calendly />
            </div>
          </div>
          <div className="flex justify-center items-center py-4 mb-8">
            <p className="py-4 px-8 text-center font-semibold border-[1px] border-secondary-text rounded-site bg-secondaryLightWhite dark:bg-secondaryDarkBlack text-primary-text max-w-xl">
              We apologize in advance, but booking a meeting doesn’t guarantee
              acceptance. We work exclusively with clients we’re confident can
              achieve outstanding results through our expertise
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Meeting;
