import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>
            <h1>hello friend</h1>
            <h3>Home page</h3>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
