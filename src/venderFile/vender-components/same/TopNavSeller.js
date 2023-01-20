function TopNavSeller (){
    return <div class="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
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
}
export default TopNavSeller