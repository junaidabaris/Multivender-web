import Header from './common/header/Header';
import "./assets/css/media.css";
import "./assets/css/style.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import PageNotFoundPage from './pages/page-not-found';
import ProductDetailPage from './pages/product-detail';
import Footer from './common/footer/Footer';
import ProductsPage from './pages/products';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<Navigate to="/page-not-found" />} />
        <Route path='page-not-found' element={<PageNotFoundPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product-detail' element={<ProductDetailPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
