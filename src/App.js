import Header from './common/header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";


import "./venderFile/css/vendors.css"
import "./venderFile/css/stylesheets.css"
import "./venderFile/css/aiz-core.css"
import "./venderFile/css/custom-style.css"


import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import PageNotFoundPage from './pages/page-not-found';
import ProductDetailPage from './pages/product-detail';
import Footer from './common/footer/Footer';
import ProductsPage from './pages/products';
import MainVender from './venderFile/vender-page/mainPage';
import { useState } from 'react';
import Dashbord from './venderFile/vender-page/dashbord';
function App() {
  const [show, setshow] = useState(true)
  return (
    <>
      {show && <Header />}
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<Navigate to="/page-not-found" />} />
        <Route path='page-not-found' element={<PageNotFoundPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product-detail' element={<ProductDetailPage />} />
        <Route path='/venderLogin' element={<MainVender setshow={setshow} />}>
          <Route path='' element={<Dashbord/>}/>
        </Route>
      </Routes>
      {show && <Footer />}
    </>
  );
}

export default App;
