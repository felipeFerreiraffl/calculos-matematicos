import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePagina from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePagina />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
