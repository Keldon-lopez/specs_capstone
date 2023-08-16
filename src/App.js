// import logo from './logo.svg';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div className="App">
      < Header />
      <Routes>
        <Route path='/' element={< MainDisplay />}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      < Footer />
      
    </div>
  );
}

export default App;
