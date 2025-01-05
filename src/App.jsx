import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
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
