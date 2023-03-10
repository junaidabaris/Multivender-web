import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ImCross } from 'react-icons/im'

function AsideSeller({ isActive, handleAsidebar }) {
    const [state, setState] = useState(false)
    const [pacage, setStatePacage] = useState(false)


    return <div className="aiz-sidebar-wrap">
        <div className={`aiz-sidebar left c-scrollbar ${isActive ? "active" : ""} `}>
            <div className="cancel-side-bar">
                <ImCross onClick={handleAsidebar} />
            </div>
            <div className="aiz-side-nav-logo-wrap">
                <div className="d-block text-center my-3">
                    <img className="mw-100 mb-3 brand-icon"
                        src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                        alt="" />
                    <h3 className="fs-16  m-0 text-primary">Demo Seller</h3>
                    <p className="text-primary">demoseller@mail.com</p>
                </div>
            </div>
            <div className="aiz-side-nav-wrap">
                <div className="px-20px mb-3">
                    <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text"
                        name="" placeholder="Search in menu" id="menu-search" />
                </div>
                <ul className="aiz-side-nav-list" id="search-menu">
                </ul>
                <ul className="aiz-side-nav-list" id="main-menu" data-toggle="aiz-side-menu">
                    <li className="aiz-side-nav-item">
                        <Link to="/seller" className="aiz-side-nav-link">
                            <i className="las la-home aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                        <Link to="#" className="aiz-side-nav-link" onClick={() => { setState(!state) }} >
                            <i className="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Products</span>
                            <span className="aiz-side-nav-arrow"></span>
                        </Link>
                        <ul className={`aiz-side-nav-list level-2 mm-collapse ${state ? "mm-show" : "extra"}`} id="product">
                            <li className="aiz-side-nav-item">
                                <NavLink to="sellerProducts" className="aiz-side-nav-link ">
                                    <span className="aiz-side-nav-text">Products</span>
                                </NavLink>
                            </li>

                            <li className="aiz-side-nav-item">
                                <NavLink to="product-bulk-upload"
                                    className="aiz-side-nav-link ">
                                    <span className="aiz-side-nav-text">Product Bulk Upload</span>
                                </NavLink>
                            </li>
                            <li className="aiz-side-nav-item">
                                <NavLink to="digitalproducts" className="aiz-side-nav-link ">
                                    <span className="aiz-side-nav-text">Digital Products</span>
                                </NavLink>
                            </li>
                            <li className="aiz-side-nav-item">
                                <Link to="reviews" className="aiz-side-nav-link ">
                                    <span className="aiz-side-nav-text">Product Reviews</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="banners" className="aiz-side-nav-link ">
                            <i className="las la-folder-open aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Banners</span>
                        </NavLink>
                    </li>


                    <li className="aiz-side-nav-item">
                        <NavLink to="uploads" className="aiz-side-nav-link ">
                            <i className="las la-folder-open aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Uploaded Files</span>
                        </NavLink>
                    </li>
                    <li className="aiz-side-nav-item">
                        <Link to="#" className="aiz-side-nav-link" onClick={() => { setStatePacage(!pacage) }}>
                            <i className="las la-shopping-cart aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Package</span>
                            <span className="aiz-side-nav-arrow"></span>
                        </Link>
                        <ul className={`aiz-side-nav-list level-2 mm-collapse ${pacage ? "mm-show" : "extra"}`}>
                            <li className="aiz-side-nav-item">
                                <Link to="seller-packages" className="aiz-side-nav-link">
                                    <span className="aiz-side-nav-text">Packages</span>
                                </Link>
                            </li>

                            <li className="aiz-side-nav-item">
                                <Link to="packages-payment-list"
                                    className="aiz-side-nav-link">
                                    <span className="aiz-side-nav-text">Purchase Packages</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="aiz-side-nav-item">
                        <NavLink to="coupon" className="aiz-side-nav-link ">
                            <i className="las la-bullhorn aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Coupon</span>
                        </NavLink>
                    </li>
                    <li className="aiz-side-nav-item">
                        <a href="https://mmslfashions.in/seller/wholesale-products" className="aiz-side-nav-link ">
                            <i className="las la-luggage-cart aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Wholesale Products</span>
                        </a>
                    </li>

                    <li className="aiz-side-nav-item">
                        <a href="https://mmslfashions.in/seller/pos" className="aiz-side-nav-link ">
                            <i className="las la-fax aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">POS Manager</span>
                        </a>
                    </li>
                    <li className="aiz-side-nav-item">
                        <Link to="orders" className="aiz-side-nav-link ">
                            <i className="las la-money-bill aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Orders</span>
                        </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                        <NavLink to="refund-request" className="aiz-side-nav-link ">
                            <i className="las la-backward aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Received Refund Request</span>
                        </NavLink>
                    </li>


                    <li className="aiz-side-nav-item">
                        <NavLink to="shop" className="aiz-side-nav-link ">
                            <i className="las la-cog aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Shop Setting</span>
                        </NavLink>
                    </li>

                    <li className="aiz-side-nav-item">
                        <Link to="payments" className="aiz-side-nav-link ">
                            <i className="las la-history aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Payment History</span>
                        </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="pament-withdrow" className="aiz-side-nav-link ">
                            <i className="las la-money-bill-wave-alt aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Money Withdraw</span>
                        </NavLink>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="commission-history" className="aiz-side-nav-link">
                            <i className="las la-file-alt aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Commission History</span>
                        </NavLink>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="conversations" className="aiz-side-nav-link ">
                            <i className="las la-comment aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Conversations</span>
                        </NavLink>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="product-queries" className="aiz-side-nav-link ">
                            <i className="las la-question-circle aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Product Queries</span>

                        </NavLink>
                    </li>

                    <li className="aiz-side-nav-item">
                        <NavLink to="support-ticket" className="aiz-side-nav-link ">
                            <i className="las la-atom aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Support Ticket</span>
                        </NavLink>
                    </li>

                    {/* <li className="aiz-side-nav-item">
                        <NavLink to="pament-withdrow" className="aiz-side-nav-link ">
                            <i className="las la-atom aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Payment Withdraw</span>
                        </NavLink>
                    </li>
                    <li className="aiz-side-nav-item">
                        <NavLink to="order-details" className="aiz-side-nav-link ">
                            <i className="las la-atom aiz-side-nav-icon"></i>
                            <span className="aiz-side-nav-text">Order Detail</span>
                        </NavLink>
                    </li> */}

                </ul>
            </div>
        </div>
        <div className="aiz-sidebar-overlay"></div>
    </div>
}
export default AsideSeller;