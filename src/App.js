import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePagina from './pages/home';
import SobrePagina from './pages/sobre';
import ContatosPagina from './pages/contatos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePagina />} path='/' />
          <Route element={<SobrePagina />} path='/sobre' />
          <Route element={<ContatosPagina />} path='/contatos' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
