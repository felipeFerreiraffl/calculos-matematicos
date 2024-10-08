import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AppRoutes from "./routes/app.routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;