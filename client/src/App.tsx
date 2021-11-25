import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { NotFound } from './components/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/apple.com" element={<Main />} />
        <Route path="/google.com" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
