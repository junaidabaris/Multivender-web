import { useEffect } from "react"
import { Outlet } from "react-router-dom"

function MainVender({ setshow }) {

    useEffect(() => {
        setshow(false)
    }, [])
    return <>
        <div class="aiz-main-wrapper">
            <div class="aiz-sidebar-wrap">
                <div class="aiz-sidebar left c-scrollbar">
                    <div class="aiz-side-nav-logo-wrap">
                        <div class="d-block text-center my-3">
                            <img class="mw-100 mb-3"
                                src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                                className="brand-icon" alt=""/>
                                <h3 class="fs-16  m-0 text-primary">Abaris Products</h3>
                                <p class="text-primary">abarisproducts@gmail.com</p>
                        </div>
                    </div>
                    <div class="aiz-side-nav-wrap">
                        <div class="px-20px mb-3">
                            <input class="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text"
                                name="" placeholder="Search in menu" id="menu-search" onkeyup="menuSearch()"/>
                        </div>
                        <ul class="aiz-side-nav-list" id="search-menu">
                        </ul>
                        <ul class="aiz-side-nav-list" id="main-menu" data-toggle="aiz-side-menu">
                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/dashboard" class="aiz-side-nav-link">
                                    <i class="las la-home aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="#" class="aiz-side-nav-link" onclick="showList()">
                                    <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Products</span>
                                    <span class="aiz-side-nav-arrow"></span>
                                </a>
                                <ul class="aiz-side-nav-list level-2" id="product">
                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/products" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Products</span>
                                        </a>
                                    </li>

                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/product-bulk-upload/index"
                                            class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Product Bulk Upload</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/digitalproducts" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Digital Products</span>
                                        </a>
                                    </li>
                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/reviews" class="aiz-side-nav-link ">
                                            <span class="aiz-side-nav-text">Product Reviews</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/banners" class="aiz-side-nav-link ">
                                    <i class="las la-folder-open aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Banners</span>
                                </a>
                            </li>


                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/uploads" class="aiz-side-nav-link ">
                                    <i class="las la-folder-open aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Uploaded Files</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="#" class="aiz-side-nav-link" >
                                    <i class="las la-shopping-cart aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Package</span>
                                    <span class="aiz-side-nav-arrow"></span>
                                </a>
                                <ul class="aiz-side-nav-list level-2">
                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/seller-packages" class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Packages</span>
                                        </a>
                                    </li>

                                    <li class="aiz-side-nav-item">
                                        <a href="https://mmslfashions.in/seller/packages-payment-list"
                                            class="aiz-side-nav-link">
                                            <span class="aiz-side-nav-text">Purchase Packages</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/coupon" class="aiz-side-nav-link ">
                                    <i class="las la-bullhorn aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Coupon</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/wholesale-products" class="aiz-side-nav-link ">
                                    <i class="las la-luggage-cart aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Wholesale Products</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/pos" class="aiz-side-nav-link ">
                                    <i class="las la-fax aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">POS Manager</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/orders" class="aiz-side-nav-link ">
                                    <i class="las la-money-bill aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Orders</span>
                                </a>
                            </li>
                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/refund-request" class="aiz-side-nav-link ">
                                    <i class="las la-backward aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Received Refund Request</span>
                                </a>
                            </li>


                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/shop" class="aiz-side-nav-link ">
                                    <i class="las la-cog aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Shop Setting</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/payments" class="aiz-side-nav-link ">
                                    <i class="las la-history aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Payment History</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/money-withdraw-requests" class="aiz-side-nav-link ">
                                    <i class="las la-money-bill-wave-alt aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Money Withdraw</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/commission-history" class="aiz-side-nav-link">
                                    <i class="las la-file-alt aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Commission History</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/conversations" class="aiz-side-nav-link ">
                                    <i class="las la-comment aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Conversations</span>
                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/product-queries" class="aiz-side-nav-link ">
                                    <i class="las la-question-circle aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Product Queries</span>

                                </a>
                            </li>

                            <li class="aiz-side-nav-item">
                                <a href="https://mmslfashions.in/seller/support_ticket" class="aiz-side-nav-link ">
                                    <i class="las la-atom aiz-side-nav-icon"></i>
                                    <span class="aiz-side-nav-text">Support Ticket</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="aiz-sidebar-overlay"></div>
            </div>
            <div class="aiz-content-wrapper">
                <div class="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
                    <div class="d-flex">
                        <div class="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3 ml-0"
                            data-toggle="aiz-mobile-nav">
                            <button class="aiz-mobile-toggler">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
                        <div class="d-flex justify-content-around align-items-center align-items-stretch">
                            <div class="d-flex justify-content-around align-items-center align-items-stretch">
                                <div class="aiz-topbar-item">
                                    <div class="d-flex align-items-center">
                                        <a class="btn btn-icon btn-circle btn-light" href="https://mmslfashions.in"
                                            target="_blank" title="Browse Website">
                                            <i class="las la-globe"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-around align-items-center align-items-stretch ml-3">
                                <div class="aiz-topbar-item">
                                    <div class="d-flex align-items-center">
                                        <a class="btn btn-icon btn-circle btn-light"
                                            href="https://mmslfashions.in/seller/pos" target="_blank" title="POS">
                                            <i class="las la-print"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-around align-items-center align-items-stretch">

                            <div class="aiz-topbar-item ml-2">
                                <div class="align-items-stretch d-flex dropdown">
                                    <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);"
                                        role="button" aria-haspopup="false" aria-expanded="false">
                                        <span class="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                                            <span class="d-flex align-items-center position-relative">
                                                <i class="las la-bell fs-24"></i>
                                                <span
                                                    class="badge badge-sm badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                            </span>
                                        </span>
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                                        <div class="p-3 bg-light border-bottom">
                                            <h6 class="mb-0">Notifications</h6>
                                        </div>
                                        <div class="px-3 c-scrollbar-light overflow-auto " >
                                            <ul class="list-group list-group-flush">
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items- py-3">
                                                    <div class="media text-inherit">
                                                        <div class="media-body">
                                                            <p class="mb-1 text-truncate-2">
                                                                <a
                                                                    href="https://mmslfashions.in/seller/orders/eyJpdiI6InE1QWZ6T2JISmZFUjNsTHg4dDdWaGc9PSIsInZhbHVlIjoiUkp2RSs1eks3cndRYi9hMk9qZWZlZz09IiwibWFjIjoiMzUzOTNjNWNmOTA2OWY0NWU2ZmEyMTg5NDIwOTc4YmEwMTNhZGRlNjBjYzVmM2U0ZGNjNjRjNDBjMWM1NTZlOSIsInRhZyI6IiJ9">
                                                                    Order code: 20221103-09563323 has been Placed
                                                                </a>
                                                            </p>
                                                            <small class="text-muted">
                                                                November 3 2022, 9:56 am
                                                            </small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    class="list-group-item d-flex justify-content-between align-items- py-3">
                                                    <div class="media text-inherit">
                                                        <div class="media-body">
                                                            <p class="mb-1 text-truncate-2">
                                                                <a
                                                                    href="https://mmslfashions.in/seller/orders/eyJpdiI6ImkxUW9TUFlGSlR5eE5vVnBLa2FpSlE9PSIsInZhbHVlIjoiNWQrMy9vVERYVDNFWFY5VUc2UWUrZz09IiwibWFjIjoiNjVjYzYxZTE3ZjhiZTcyYjExMDk1NDcyNDg5NTQ3MDY5MDllNGViMDgyZTVhODNiOWY2NmU0MDc4M2VmNTNkZSIsInRhZyI6IiJ9">
                                                                    Order code: 20221006-19574683 has been Placed
                                                                </a>
                                                            </p>
                                                            <small class="text-muted">
                                                                October 6 2022, 7:57 pm
                                                            </small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="text-center border-top">
                                            <a href="https://mmslfashions.in/seller/all-notification"
                                                class="text-reset d-block py-2">
                                                View All Notifications
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="aiz-topbar-item ml-2">
                                <div class="align-items-stretch d-flex dropdown " id="lang-change">
                                    <a class="dropdown-toggle no-arrow" data-toggle="dropdown" href="javascript:void(0);"
                                        role="button" aria-haspopup="false" aria-expanded="false">
                                        <span class="btn btn-icon">
                                            <img src="https://mmslfashions.in/public/assets/img/flags/en.png" height="11"/>
                                        </span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xs">

                                        <li>
                                            <a href="javascript:void(0)" data-flag="en" class="dropdown-item  active ">
                                                <img src="https://mmslfashions.in/public/assets/img/flags/en.png"
                                                    class="mr-2"/>
                                                    <span class="language">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-flag="bd" class="dropdown-item ">
                                                <img src="https://mmslfashions.in/public/assets/img/flags/bd.png"
                                                    class="mr-2"/>
                                                    <span class="language">Bangla</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" data-flag="sa" class="dropdown-item ">
                                                <img src="https://mmslfashions.in/public/assets/img/flags/sa.png"
                                                    class="mr-2"/>
                                                    <span class="language">Arabic</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="aiz-topbar-item ml-2">
                                <div class="align-items-stretch d-flex dropdown">
                                    <a class="dropdown-toggle no-arrow text-dark" data-toggle="dropdown"
                                        href="javascript:void(0);" role="button" aria-haspopup="false"
                                        aria-expanded="false">
                                        <span class="d-flex align-items-center">
                                            <span class="avatar avatar-sm mr-md-2">
                                                <img src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                                                    onerror="this.onerror=null;this.src='https://mmslfashions.in/public/assets/img/avatar-place.png';"/>
                                            </span>
                                            <span class="d-none d-md-block">
                                                <span class="d-block fw-500">Abaris Seller</span>
                                                <span class="d-block small opacity-60">seller</span>
                                            </span>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md">
                                        <a href="https://mmslfashions.in/seller/profile" class="dropdown-item">
                                            <i class="las la-user-circle"></i>
                                            <span>Profile</span>
                                        </a>

                                        <a href="https://mmslfashions.in/logout" class="dropdown-item">
                                            <i class="las la-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    </>
}
export default MainVender