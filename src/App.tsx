import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import { Provider } from 'react-redux';
import store from './redux-context/redux-store/store';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Navbar from './components/navbar/Navbar';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="*"
                element={
                  <div
                    style={{
                      height: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
