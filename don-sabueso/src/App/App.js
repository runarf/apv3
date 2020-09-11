import React from 'react';
import { Products } from './Products/Products';
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
