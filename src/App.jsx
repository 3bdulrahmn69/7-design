import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </ReactLenis>
  );
};

const InnerApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
