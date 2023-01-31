import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function AsideAdmin({ isActive, handleAsidebar }) {

    const [state, setState] = useState(false)
    const [pacage, setStatePacage] = useState(false)

    return (
        <>
            <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
                <div className="aiz-side-nav-logo-wrap">
                    <a href="https://mmslfashions.in/admin" className="d-block text-left">
                        {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
                    </a>
                </div>
                {/* <div className="cancel-side-bar">
                    <ImCross onClick={handleAsidebar} />
                </div> */}
                <div className="aiz-side-nav-wrap">
                    <div className="px-20px mb-3">
                        <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" name placeholder="Search in menu" id="menu-search" onKeyUp="menuSearch()" fdprocessedid="axe2ae" />
                    </div>
                    <ul className="aiz-side-nav-list" id="search-menu">
                    </ul>
                    <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                        <li className="aiz-side-nav-item mm-active">
                            <Link href="https://mmslfashions.in/admin" className="aiz-side-nav-link active" aria-expanded="true">
                                <i className="las la-home aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Dashboard</span>
                            </Link>
                        </li>
                        {/* POS Addon*/}
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link" onClick={() => { setState(!state) }}>
                                <i className="las la-tasks aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">POS System</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            <ul className={`aiz-side-nav-list level-2 mm-collapse ${state ? "mm-show" : "extra"}`} id="product">
                                <li className="aiz-side-nav-item">
                                    <NavLink to="https://mmslfashions.in/admin/pos" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">POS Manager</span>
                                    </NavLink>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <NavLink href="https://mmslfashions.in/admin/pos-activation" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">POS Configuration</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* Product */}
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link" onClick={() => { setState(!state) }}>
                                <i className="las la-shopping-cart aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Products</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            {/*Submenu*/}
                            <ul className={`aiz-side-nav-list level-2 mm-collapse ${state ? "mm-show" : "extra"}`} id="product">
                                <li className="aiz-side-nav-item">
                                    <Link className="aiz-side-nav-link" to="https://mmslfashions.in/admin/products/create">
                                        <span className="aiz-side-nav-text">Add New Product</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to="https://mmslfashions.in/admin/products/all" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">All products</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/products/admin" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">In House Products</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/products/seller" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Seller Products</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/digitalproducts" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Digital Products</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/product-bulk-upload/index" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Bulk Import</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/product-bulk-export" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Bulk Export</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/categories" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Category</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/brands" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Brand</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/attributes" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Attribute</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/colors" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Colors</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/reviews" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Product Reviews</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Wholesale Product */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-luggage-cart aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Wholesale Products</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a className="aiz-side-nav-link" href="https://mmslfashions.in/admin/wholesale-product/create">
                                        <span className="aiz-side-nav-text">Add New Wholesale Product</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/wholesale/all-products" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">All Wholesale Products</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/wholesale/inhouse-products" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">In House Wholesale Products</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/wholesale/seller-products" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Seller Wholesale Products</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Sale */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-money-bill aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Sales</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            {/*Submenu*/}
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/all_orders" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">All Orders</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/inhouse-orders" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Inhouse orders</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/seller_orders" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Seller Orders</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/orders_by_pickup_point" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Pick-up Point Order</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Deliver Boy Addon*/}
                        {/* Refund addon */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-backward aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Refunds</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/refund-request-all" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Refund Requests</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/paid-refund" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Approved Refunds</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/rejected-refund" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">rejected Refunds</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/refund-request-config" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Refund Configuration</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Customers */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-user-friends aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Customers</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/customers" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Customer list</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Sellers */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-user aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Sellers</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/sellers" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">All Seller</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/seller/payments" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Payouts</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/withdraw_requests_all" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Payout Requests</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/vendor_commission" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Seller Commission</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/seller_packages" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Seller Packages</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/verification/form" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Seller Verification Form</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/seller-banners" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Seller Banners</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <a href="https://mmslfashions.in/admin/uploaded-files" className="aiz-side-nav-link ">
                                <i className="las la-folder-open aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Uploaded Files</span>
                            </a>
                        </li>
                        {/* Reports */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-file-alt aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Reports</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/in_house_sale_report" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">In House Product Sale</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/seller_sale_report" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Seller Products Sale</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/stock_report" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Products Stock</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/wish_report" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Products wishlist</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/user_search_report" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">User Searches</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/commission-log" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Commission History</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/wallet-history" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Wallet Recharge History</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/*Blog System*/}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-bullhorn aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Blog System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/blog" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">All Posts</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/blog-category" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Categories</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* marketing */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-bullhorn aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Marketing</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/flash_deals" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Flash deals</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/newsletter" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Newsletters</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/sms" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Bulk SMS</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/subscribers" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Subscribers</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/coupon" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Coupon</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Support */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-link aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Support</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/support_ticket" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Ticket</span>
                                        <span className="badge badge-info">2</span>                                  </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/conversations" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Product Conversations</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/product-queries" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Product Queries</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Affiliate Addon */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-link aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Affiliate System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/affiliate/configs" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Affiliate Registration Form</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/affiliate" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Affiliate Configurations</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/affiliate/users" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Affiliate Users</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/refferal/users" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Referral Users</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/affiliate/withdraw_requests" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Affiliate Withdraw Requests</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/affiliate/logs" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Affiliate Logs</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Offline Payment Addon*/}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-money-check-alt aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Offline Payment System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/manual_payment_methods" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Manual Payment Methods</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/offline-wallet-recharge-requests" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Offline Wallet Recharge</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/offline-seller-package-payment-requests" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Offline Seller Package Payments</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Paytm Addon */}
                        {/* Club Point Addon*/}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="lab la-btc aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Club Point System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/club-points/configuration" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Club Point Configurations</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/set-club-points" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Set Product Point</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/club-points/index" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">User Points</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* reward Point Addon*/}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="lab la-btc aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Reward Point System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/set-share-reward-points" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Social Share Reward Points</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/set-like-reward-points" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Social Media Like Reward Points</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/*OTP addon */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-phone aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">OTP System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/otp-configuration" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">OTP Configurations</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/sms-templates" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">SMS Templates</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/otp-credentials-configuration" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Set OTP Credentials</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-phone aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">African Payment Gateway Addon</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/african/configuration" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">African PG Configurations</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/african/credentials_index" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Set African PG Credentials</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Website Setup */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link ">
                                <i className="las la-desktop aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Website Setup</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/website/header" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Header</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/website/footer?lang=en" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Footer</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/website/pages" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Pages</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/website/appearance" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Appearance</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Setup & Configurations */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-dharmachakra aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Setup &amp; Configurations</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/general-setting" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">General Settings</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/activation" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Features activation</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/languages" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Languages</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/currency" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Currency</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/tax" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Vat &amp; TAX</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/pick_up_points" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Pickup point</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/smtp-settings" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">SMTP Settings</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/payment-method" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Payment Methods</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/order-configuration" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Order Configuration</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/file_system" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">File System &amp; Cache Configuration</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/social-login" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Social media Logins</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="javascript:void(0);" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Facebook</span>
                                        <span className="aiz-side-nav-arrow" />
                                    </a>
                                    <ul className="aiz-side-nav-list level-3 mm-collapse">
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/facebook-chat" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Facebook Chat</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/facebook-comment" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Facebook Comment</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="javascript:void(0);" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Google</span>
                                        <span className="aiz-side-nav-arrow" />
                                    </a>
                                    <ul className="aiz-side-nav-list level-3 mm-collapse">
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/google-analytics" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Analytics Tools</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/google-recaptcha" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Google reCAPTCHA</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/google-map" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Google Map</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/google-firebase" className="aiz-side-nav-link">
                                                <span className="aiz-side-nav-text">Google Firebase</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="javascript:void(0);" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Shipping</span>
                                        <span className="aiz-side-nav-arrow" />
                                    </a>
                                    <ul className="aiz-side-nav-list level-3 mm-collapse">
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/shipping_configuration" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping Configuration</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/countries" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping Countries</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/states" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping States</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/cities" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping Cities</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/zones" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping Zones</span>
                                            </a>
                                        </li>
                                        <li className="aiz-side-nav-item">
                                            <a href="https://mmslfashions.in/admin/carriers" className="aiz-side-nav-link ">
                                                <span className="aiz-side-nav-text">Shipping Carrier</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Staffs */}
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-user-tie aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">Staffs</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/staffs" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">All staffs</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/roles" className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Staff permissions</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <a href="#" className="aiz-side-nav-link">
                                <i className="las la-user-tie aiz-side-nav-icon" />
                                <span className="aiz-side-nav-text">System</span>
                                <span className="aiz-side-nav-arrow" />
                            </a>
                            <ul className="aiz-side-nav-list level-2 mm-collapse">
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/system/update" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Update</span>
                                    </a>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <a href="https://mmslfashions.in/admin/system/server-status" className="aiz-side-nav-link">
                                        <span className="aiz-side-nav-text">Server status</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Addon Manager 
                              <li class="aiz-side-nav-item">
                  <a href="https://mmslfashions.in/admin/addons" class="aiz-side-nav-link ">
                      <i class="las la-wrench aiz-side-nav-icon"></i>
                      <span class="aiz-side-nav-text">Addon Manager</span>
                  </a>
              </li>
                          */}
                    </ul>{/* .aiz-side-nav */}
                </div>{/* .aiz-side-nav-wrap */}
            </div>

        </>
    )
}
export default AsideAdmin