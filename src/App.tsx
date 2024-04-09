import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './routes/Index';
import Home from './routes/Home';
import ProfilePresenter from './routes/ProfilePresenter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<ProfilePresenter />} />
        </Route>
        <Route path="/notfound" element={<h3>Não Encontrado</h3>} />
      </Routes>
    </BrowserRouter>
  );
}
