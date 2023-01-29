function OrderDetail() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="card">
                <div className="card-header">
                    <h1 className="h2 fs-16 mb-0">Order Details</h1>
                </div>

                <div className="card-body">
                    <div className="row gutters-5">
                        <div className="col text-md-left text-center">
                        </div>
                    </div>
                    <div className="row gutters-5 mt-2">
                        <div className="col text-md-left text-center">
                            <address>
                                <strong className="text-main">
                                    Azharuddin Shamim
                                </strong><br />
                                abarissolution@gmail.com<br />
                                08851746286<br />
                                Gali No. 21, Zakir Nagar,, New Delhi, 110025<br />
                                India
                            </address>
                        </div>
                        <div className="col-md-4 ml-auto">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-main text-bold">Order #</td>
                                        <td className="text-info text-bold text-right">20221103-09563323</td>
                                    </tr>
                                    <tr>
                                        <td className="text-main text-bold">Order status</td>
                                        <td className="text-right">
                                            <span className="badge badge-inline badge-info">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-main text-bold">Order date</td>
                                        <td className="text-right">03-11-2022 09:56 AM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-main text-bold">Total amount</td>
                                        <td className="text-right">
                                            ZK600.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-main text-bold">Payment method</td>
                                        <td className="text-right">
                                            Cash on Delivery</td>
                                    </tr>

                                    <tr>
                                        <td className="text-main text-bold">Additional Info</td>
                                        <td className="text-right"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr className="new-section-sm bord-no" />
                    <div className="row">
                        <div className="col-lg-12 table-responsive">
                            <table className="table-bordered aiz-table invoice-summary table footable footable-1 breakpoint-xl">
                                <thead>
                                    <tr className="bg-trans-dark footable-header">
                                        <th data-breakpoints="lg" className="min-col footable-first-visible" style={{display: "table-cell"}}>#</th><th width="10%" style={{display: "table-cell"}}>Photo</th><th className="text-uppercase" style={{display: "table-cell"}}>Description</th><th data-breakpoints="lg" className="text-uppercase" style={{display: "table-cell"}}>Delivery Type</th><th data-breakpoints="lg" className="min-col text-uppercase text-center" style={{display: "table-cell"}}>
                                            QTY
                                        </th><th data-breakpoints="lg" className="min-col text-uppercase text-center" style={{display: "table-cell"}}>
                                            Price</th><th data-breakpoints="lg" className="min-col text-uppercase text-right footable-last-visible" style={{display: "table-cell"}}>
                                            Total</th></tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className="footable-first-visible" style={{display: "table-cell"}}>1</td><td style={{display: "table-cell"}}>
                                            <a href="https://mmslfashions.in/product/ntrat-alamonyom" target="_blank"><img height="50" src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" /></a>
                                        </td><td style={{display: "table-cell"}}>
                                            <strong><a href="https://mmslfashions.in/product/ntrat-alamonyom" target="_blank" className="text-muted">Ammonium Nitrate</a></strong>
                                            <small></small>
                                        </td><td style={{display: "table-cell"}}>
                                            Home Delivery
                                        </td><td className="text-center" style={{display: "table-cell"}}>2</td><td className="text-center" style={{display: "table-cell"}}>
                                            ZK300.00</td><td className="text-center footable-last-visible" style={{display: "table-cell"}}>ZK600.00</td></tr></tbody>
                            </table>
                        </div>
                    </div>
                    <div className="clearfix float-right">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="text-muted">Sub Total :</strong>
                                    </td>
                                    <td>
                                        ZK600.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong className="text-muted">Tax :</strong>
                                    </td>
                                    <td>
                                        ZK0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong className="text-muted">Shipping :</strong>
                                    </td>
                                    <td>
                                        ZK0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong className="text-muted">Coupon :</strong>
                                    </td>
                                    <td>
                                        ZK0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong className="text-muted">Total :</strong>
                                    </td>
                                    <td className="text-muted h5">
                                        ZK600.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="no-print text-right">
                            <a href="https://mmslfashions.in/seller/invoice/3" type="button" className="btn btn-icon btn-light"><i className="las la-print"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
}
export default OrderDetail