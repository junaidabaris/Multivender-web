function AsideSeller (){
    return <div class="aiz-sidebar-wrap">
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
}
export default AsideSeller