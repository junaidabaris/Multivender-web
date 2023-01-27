import { Link } from "react-router-dom"

function AsideBar(){
    return  <div className="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
    <div className="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
        <div className="p-4 text-xl-center mb-4 border-bottom bg-primary text-white position-relative lastWork">
            <span className="avatar avatar-md mb-3">
                <img src="https://mmslfashions.in/public/assets/img/avatar-place.png" className="image rounded-circle"  />
            </span>
            <h4 className="h5 fs-16 mb-1 fw-600">Azharuddin Shamim</h4>
            <div className="text-truncate opacity-60">+91-8920073535</div>
        </div>

        <div className="sidemnenu mb-3">
            <ul className="aiz-side-nav-list px-2 metismenu" data-toggle="aiz-side-menu">

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-home aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Dashboard</span>
                    </Link>
                </li>


                <li className="aiz-side-nav-item mm-active">
                    <Link to="purchase_history" className="aiz-side-nav-link active" aria-expanded="true">
                        <i className="las la-file-alt aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Purchase History</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="digital_purchase_history" className="aiz-side-nav-link ">
                        <i className="las la-download aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Downloads</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-backward aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Sent Refund Request</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="la la-heart-o aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Wishlist</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="la la-refresh aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Compare</span>
                    </Link>
                </li>


                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link">
                        <i className="las la-gavel aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Auction</span>
                        <span className="aiz-side-nav-arrow"></span>
                    </Link>
                    <ul className="aiz-side-nav-list level-2 mm-collapse">
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link">
                                <span className="aiz-side-nav-text">Bidded Products</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link">
                                <span className="aiz-side-nav-text">Purchase History</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-comment aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Conversations</span>
                    </Link>
                </li>


                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-dollar-sign aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">My Wallet</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-dollar-sign aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Earning Points</span>
                    </Link>
                </li>

                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-dollar-sign aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Affiliate</span>
                        <span className="aiz-side-nav-arrow"></span>
                    </Link>
                    <ul className="aiz-side-nav-list level-2 mm-collapse">
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link">
                                <span className="aiz-side-nav-text">Affiliate System</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link">
                                <span className="aiz-side-nav-text">Payment History</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to="#" className="aiz-side-nav-link">
                                <span className="aiz-side-nav-text">Withdraw Request history</span>
                            </Link>
                        </li>
                    </ul>
                </li>


                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-atom aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Support Ticket</span>
                    </Link>
                </li>
                <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                        <i className="las la-user aiz-side-nav-icon"></i>
                        <span className="aiz-side-nav-text">Manage Profile</span>
                    </Link>
                </li>
            </ul>
        </div>

    </div>

    <div className="fixed-bottom d-xl-none bg-white border-top d-flex justify-content-between px-2" style={{ boxShadow: "0 -5px 10px rgb(0 0 0 / 10%)" }}>
        <a className="btn btn-sm p-2 d-flex align-items-center" href="#">
            <i className="las la-sign-out-alt fs-18 mr-2"></i>
            <span>Logout</span>
        </a>
        <button className="btn btn-sm p-2 " data-toggle="className-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav" data-same=".mobile-side-nav-thumb">
            <i className="las la-times la-2x"></i>
        </button>
    </div>
</div>
}
export default AsideBar