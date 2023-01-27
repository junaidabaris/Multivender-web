import { Link } from "react-router-dom"

function AsideBar() {
    return <div class="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
        <div class="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
            <div class="p-4 text-xl-center mb-4 border-bottom bg-primary text-white position-relative lastWork">
                <span class="avatar avatar-md mb-3">
                    <img src="https://mmslfashions.in/public/assets/img/avatar-place.png" class="image rounded-circle" onerror="this.onerror=null;this.src='https://mmslfashions.in/public/assets/img/avatar-place.png';" />
                </span>
                <h4 class="h5 fs-16 mb-1 fw-600">Azharuddin Shamim</h4>
                <div class="text-truncate opacity-60">+91-8920073535</div>
            </div>

            <div class="sidemnenu mb-3">
                <ul class="aiz-side-nav-list px-2 metismenu" data-toggle="aiz-side-menu">

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-home aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Dashboard</span>
                        </Link>
                    </li>


                    <li class="aiz-side-nav-item mm-active">
                        <Link to="#" class="aiz-side-nav-link active" aria-expanded="true">
                            <i class="las la-file-alt aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Purchase History</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-download aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Downloads</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-backward aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Sent Refund Request</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="wishlists" class="aiz-side-nav-link ">
                            <i class="la la-heart-o aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Wishlist</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="compare" class="aiz-side-nav-link ">
                            <i class="la la-refresh aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Compare</span>
                        </Link>
                    </li>


                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link">
                            <i class="las la-gavel aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Auction</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </Link>
                        <ul class="aiz-side-nav-list level-2 mm-collapse">
                            <li class="aiz-side-nav-item">
                                <Link to="#" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Bidded Products</span>
                                </Link>
                            </li>
                            <li class="aiz-side-nav-item">
                                <Link to="#" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Purchase History</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-comment aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Conversations</span>
                        </Link>
                    </li>


                    <li class="aiz-side-nav-item">
                        <Link to="wallet" class="aiz-side-nav-link ">
                            <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">My Wallet</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Earning Points</span>
                        </Link>
                    </li>

                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-dollar-sign aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Affiliate</span>
                            <span class="aiz-side-nav-arrow"></span>
                        </Link>
                        <ul class="aiz-side-nav-list level-2 mm-collapse">
                            <li class="aiz-side-nav-item">
                                <Link to="#" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Affiliate System</span>
                                </Link>
                            </li>
                            <li class="aiz-side-nav-item">
                                <Link to="#" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Payment History</span>
                                </Link>
                            </li>
                            <li class="aiz-side-nav-item">
                                <Link to="#" class="aiz-side-nav-link">
                                    <span class="aiz-side-nav-text">Withdraw Request history</span>
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-atom aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Support Ticket</span>
                        </Link>
                    </li>
                    <li class="aiz-side-nav-item">
                        <Link to="#" class="aiz-side-nav-link ">
                            <i class="las la-user aiz-side-nav-icon"></i>
                            <span class="aiz-side-nav-text">Manage Profile</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>

        <div class="fixed-bottom d-xl-none bg-white border-top d-flex justify-content-between px-2" style={{ boxShadow: "0 -5px 10px rgb(0 0 0 / 10%)" }}>
            <a class="btn btn-sm p-2 d-flex align-items-center" href="#">
                <i class="las la-sign-out-alt fs-18 mr-2"></i>
                <span>Logout</span>
            </a>
            <button class="btn btn-sm p-2 " data-toggle="class-toggle" data-backdrop="static" data-target=".aiz-mobile-side-nav" data-same=".mobile-side-nav-thumb">
                <i class="las la-times la-2x"></i>
            </button>
        </div>
    </div>
}
export default AsideBar