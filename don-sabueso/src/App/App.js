import React from 'react';
import './App.css';
import { Products } from './Products';
import { Footer } from './Footer';
import { Welcome } from './Welcome';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
