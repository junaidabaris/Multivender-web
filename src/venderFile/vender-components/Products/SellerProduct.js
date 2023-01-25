function SellerProduct() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

            <div className="card">
                <form id="sort_orders" action="" method="GET">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Orders</h5>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" data-placeholder="Filter by Payment Status" name="payment_status" tabIndex="-98">
                                <option value="">Filter by Payment Status</option>
                                <option value="paid">Paid</option>
                                <option value="unpaid">Un-Paid</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Filter by Payment Status"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Filter by Payment Status</div></div> </div></button><div className="dropdown-menu " style={{ overflow: "hidden" }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1" aria-activedescendant="bs-select-1-0" style={{ overflowY: "auto" }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: "0px", marginBottom: "0px" }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex="0" aria-setsize="3" aria-posinset="1" aria-selected="true"><span className="text">Filter by Payment Status</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex="0"><span className="text">Paid</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex="0"><span className="text">Un-Paid</span></a></li></ul></div></div></div>
                        </div>

                        <div className="col-md-3 ml-auto">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" data-placeholder="Filter by Payment Status" name="delivery_status" tabIndex="-98">
                                <option value="">Filter by Deliver Status</option>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="on_delivery">On delivery</option>
                                <option value="delivered">Delivered</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Filter by Deliver Status"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Filter by Deliver Status</div></div> </div></button><div className="dropdown-menu " style={{ overflow: "hidden" }}><div className="inner show" role="listbox" id="bs-select-2" tabIndex="-1" aria-activedescendant="bs-select-2-0" style={{ overflowY: "auto" }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: "0px", marginBottom: "0px" }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex="0" aria-setsize="5" aria-posinset="1" aria-selected="true"><span className="text">Filter by Deliver Status</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex="0"><span className="text">Pending</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex="0"><span className="text">Confirmed</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex="0"><span className="text">On delivery</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-4" tabIndex="0"><span className="text">Delivered</span></a></li></ul></div></div></div>
                        </div>
                        <div className="col-md-3">
                            <div className="from-group mb-0">
                                <input type="text" className="form-control" id="search" name="search" placeholder="Type Order code &amp; hit Enter" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="card-body p-3">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                        <thead>
                            <tr className="footable-header">

                                <th className="footable-first-visible" style={{ display: "table-cell" }}>#</th><th style={{ display: "table-cell" }}>Order Code:</th><th data-breakpoints="lg" style={{ display: "table-cell" }}>Num. of Products</th><th data-breakpoints="lg" style={{ display: "table-cell" }}>Customer</th><th data-breakpoints="md" style={{ display: "table-cell" }}>Amount</th><th data-breakpoints="lg" style={{ display: "table-cell" }}>Delivery Status</th><th style={{ display: "table-cell" }}>Payment Status</th><th className="text-right footable-last-visible" style={{ display: "table-cell" }}>Options</th></tr>
                        </thead>
                        <tbody>


                            <tr>








                                <td className="footable-first-visible" style={{ display: "table-cell" }}>
                                    1
                                </td><td style={{ display: "table-cell" }}>
                                    <a href="#20221103-09563323" >20221103-09563323</a>
                                </td><td style={{ display: "table-cell" }}>
                                    1
                                </td><td style={{ display: "table-cell" }}>
                                    Azharuddin Shamim
                                </td><td style={{ display: "table-cell" }}>
                                    ZK600.00
                                </td><td style={{ display: "table-cell" }}>
                                    Pending
                                </td><td style={{ display: "table-cell" }}>
                                    <span className="badge badge-inline badge-danger">Un-Paid</span>
                                </td><td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                    <a href="https://mmslfashions.in/seller/orders/eyJpdiI6IkRKakRYMWZXSjBDdzVKK0FpVC9nZHc9PSIsInZhbHVlIjoiajdtNlprbnBwbUw0dmN3UStJamRNUT09IiwibWFjIjoiMzQ0OTQwMjJmMzAzN2U1NjM0MDVlZDcyYmM4NjU0MjFkMmRhNTE0MjdkNDI4NTQwODBiNmE5NWZmY2JmODFmMSIsInRhZyI6IiJ9" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Order Details">
                                        <i className="las la-eye"></i>
                                    </a>
                                    <a href="https://mmslfashions.in/seller/invoice/3" className="btn btn-soft-warning btn-icon btn-circle btn-sm" title="Download Invoice">
                                        <i className="las la-download"></i>
                                    </a>
                                </td></tr><tr>








                                <td className="footable-first-visible" style={{ display: "table-cell" }}>
                                    2
                                </td><td style={{ display: "table-cell" }}>
                                    <a href="#20221006-19574683" >20221006-19574683</a>
                                </td><td style={{ display: "table-cell" }}>
                                    1
                                </td><td style={{ display: "table-cell" }}>
                                    Azharuddin Shamim
                                </td><td style={{ display: "table-cell" }}>
                                    ZK220.00
                                </td><td style={{ display: "table-cell" }}>
                                    Pending
                                </td><td style={{ display: "table-cell" }}>
                                    <span className="badge badge-inline badge-danger">Un-Paid</span>
                                </td><td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                    <a href="https://mmslfashions.in/seller/orders/eyJpdiI6Ikk0RHpYNmFVd0lXQy9MODJ1bGlFMHc9PSIsInZhbHVlIjoiVjVuWUdaTERXM25XS1VQMzd0UWNlZz09IiwibWFjIjoiMjQ5ZTAzNDEyZDAzNWE0YjMwZjM1YWQxNGE5MzkzZmRmOTBiYjI3NWUwMjgyYjYxNjYzMTQ4NWQ2OGFmNjk5MiIsInRhZyI6IiJ9" className="btn btn-soft-info btn-icon btn-circle btn-sm" title="Order Details">
                                        <i className="las la-eye"></i>
                                    </a>
                                    <a href="https://mmslfashions.in/seller/invoice/2" className="btn btn-soft-warning btn-icon btn-circle btn-sm" title="Download Invoice">
                                        <i className="las la-download"></i>
                                    </a>
                                </td></tr></tbody>
                    </table>
                    <div className="aiz-pagination">

                    </div>
                </div>
            </div>

        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
            <p className="mb-0">©  v6.3.3</p>
        </div>
    </div>
}
export default SellerProduct