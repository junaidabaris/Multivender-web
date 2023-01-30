import Header from "./common/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";

import "./venderFile/css/vendors.css";
import "./venderFile/css/stylesheets.css";
import "./venderFile/css/aiz-core.css";
import "./venderFile/css/custom-style.css";



import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import PageNotFoundPage from './pages/page-not-found';
import ProductDetailPage from './pages/product-detail';
import Footer from './common/footer/Footer';
import ProductsPage from './pages/products';
import MainVender from './venderFile/vender-page/mainPage';
import { useState } from 'react';
import DashbordPage from './venderFile/vender-page/dashbord';
import UploadedFilesPage from './venderFile/vender-page/UploadedFilesPage';
import CouponsPage from './venderFile/vender-page/couponsPage';
import RecievedRefundPage from './venderFile/vender-page/recievedRefundPage';
import ShopSettingPage from './venderFile/vender-page/shopSettingPage';
import VendorBannersPage from './venderFile/vender-page/venderBanner/Index';
import VenderOrderPage from './venderFile/vender-page/venderOrder/Index';
import VenderPaymentHistory from './venderFile/vender-page/venderPaymentHistory/Index';
import SellerProducts from './venderFile/vender-page/products/Index';
import ProductBulkPage from './venderFile/vender-page/ProductBulk/Index';
import Digitalproducts from './venderFile/vender-page/digitalProduct';
import ViewAllBrandPage from './pages/viewAllBrand/Index';
import ConversationsPage from './venderFile/vender-page/conversations';
import ProductQuerriesPage from './venderFile/vender-page/productQuerries';
import SupportTicketPage from './venderFile/vender-page/supportTicket';
import CommissionHistoryPage from './venderFile/vender-page/comissionHistory/Index';
import MoneyWithdrowPage from "./venderFile/vender-page/venderMoneyWithdrow/Index";
import DashbordCustomer from "./Customer-Panal/pages/dashbord/Index";
import PurchaseHistoryPage from "./Customer-Panal/pages/purchase/PurchaseHistoryPage";
import DownloadPage from "./Customer-Panal/pages/download/DownloadPage";
import DashbordCard from "./Customer-Panal/components/dashbord/DashbordCard";
import SendRefundPage from "./Customer-Panal/pages/sent-refund-request/Index";
import WalletPage from "./Customer-Panal/pages/wallet/WalletPage";
import EarningPointPage from "./Customer-Panal/pages/earning-point/EarningPointPage";

function App() {
  const [show, setshow] = useState(true);
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
        <Route path='/viewAllBrand' element={<ViewAllBrandPage />} />
        <Route path='/seller' element={<MainVender setshow={setshow} />}>
          <Route path='' element={<DashbordPage />} />
          <Route path='uploads' element={<UploadedFilesPage />} />
          <Route path='coupon' element={<CouponsPage />} />
          <Route path='refund-request' element={<RecievedRefundPage />} />
          <Route path='shop' element={<ShopSettingPage />} />
          <Route path='banners' element={<VendorBannersPage />} />
          <Route path='orders' element={<VenderOrderPage />} />
          <Route path='payments' element={<VenderPaymentHistory />} />
          <Route path='commission-history' element={<CommissionHistoryPage />} />
          <Route path='sellerProducts' element={<SellerProducts />} />
          <Route path='product-bulk-upload' element={<ProductBulkPage />} />
          <Route path='digitalproducts' element={<Digitalproducts />} />
          <Route path={'conversations'} element={<ConversationsPage />} />
          <Route path={'product-queries'} element={<ProductQuerriesPage />} />
          <Route path={'support-ticket'} element={<SupportTicketPage />} />
          <Route path="pament-withdrow" element={<MoneyWithdrowPage />} />
        </Route>
        <Route path='/customer' element={<DashbordCustomer />}>
            <Route path="purchase_history" element={<PurchaseHistoryPage/>}/>
            <Route path="" element={<DashbordCard/>}/>
            <Route path="digital_purchase_history" element={<DownloadPage/>}/>
            <Route path="sent-refund-request" element={<SendRefundPage/>}/>
            <Route path="wallet" element={<WalletPage/>}/>
            <Route path="earning-points" element={<EarningPointPage/>}/>
        </Route>
      </Routes>
      {show && <Footer />}
    </>
  );
}

export default App;
