import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { WistiaPlayer } from '@wistia/wistia-player-react';
import Calendly from './components/Calendly';
import Footer from '../../components/Footer';
import { LatinSpan } from '../../components/Section';
import logo from '../../assets/logo-textl.png';
import Container from '../../components/container';
import { Link } from 'react-router-dom';

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
      <h1 className="text-secondary-text font-semibold text-center py-4 bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B]">
        Only 3 Spots Are Available This Month
      </h1>
      <div className="h-10 w-full bg-[#FF7B00]">
        <div className="h-10 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-t-full"></div>
      </div>
      <div className="grid-bg overflow-hidden">
        <header className="bg-gradient-to-b from-primaryLightWhite dark:from-primaryDarkBlack to-transparent">
          <nav className="flex flex-col items-center justify-center gap-8 pt-2 pb-16">
            <div className="flex items-center justify-center w-32 xl:w-36">
              <Link to="/">
                <img src={logo} alt="Seven Design Logo" />
              </Link>
            </div>
            <hr
              className="h-[1px] bg-secondary-text border-none w-1/2"
              aria-hidden="true"
            />
          </nav>
        </header>
        <main className="flex flex-col ">
          <div className="flex flex-col gap-[19.5px] text-gap">
            <Container className="flex flex-col gap-[19.5px] text-gap">
              <div>
                <h1 className="text-center text-site md:text-site-md tracking-site leading-site font-medium">
                  Hop on a <LatinSpan>call</LatinSpan> with us
                </h1>
              </div>
              <div className="flex justify-center items-center text-primary-text">
                <div className="flex flex-col gap-2 p-4 justify-center items-center max-w-2xl mx-auto text-lg text-center text-[17px] md:text-[20px] text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 leading-[1.5em] font-medium">
                  <p>
                    We&apos;re currently accepting new clients for our logo
                    design and brand identity services this month!
                  </p>
                  <p>Seats are limited, so act fast!</p>
                  <p>
                    To apply, book a call with our team through this form, and
                    we&apos;ll guide you through our branding solutions and how
                    to get started.
                  </p>
                  <p>Book now and create your iconic brand!</p>
                </div>
              </div>
            </Container>
            <div className="relative flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center">
              <div className="absolute w-4/6 h-4/6 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-30"></div>
              <div className="w-11/12 lg:w-1/3 z-10 max-w-xl">
                <WistiaPlayer
                  mediaId="v8g9mwx7d6"
                  autoplay={false}
                  playerColor="#feda00"
                  volume={0.5}
                  bigPlayButton={true}
                  roundedPlayer={24}
                />
              </div>
              <div className="w-full lg:w-1/3 z-10 max-w-xl">
                <Calendly />
              </div>
            </div>
          </div>
          <Container className="px-4 md:px-0">
            <div className="flex justify-center items-center mb-16">
              <p className="py-4 px-8 text-center font-semibold border-[1px] border-secondary-text rounded-site bg-secondaryLightWhite dark:bg-secondaryDarkBlack text-primary-text max-w-xl">
                We apologize in advance, but booking a meeting doesn’t guarantee
                acceptance. We work exclusively with clients we’re confident can
                achieve outstanding results through our expertise
              </p>
            </div>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Meeting;
