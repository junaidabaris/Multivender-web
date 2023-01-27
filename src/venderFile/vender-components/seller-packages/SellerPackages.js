function SellerPackages() {
    return <>
        <section className="py-8 bg-soft-primary">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 mx-auto text-center">
                        <h1 className="mb-0 fw-700">Premium Packages for Sellers</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 py-lg-5">
            <div className="container">
                <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 gutters-10 justify-content-center">
                    <div className="col">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="text-center mb-4 mt-3">
                                    <img className="mw-100 mx-auto mb-4" style={{width:"95px"}} src="https://mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" height="100" />
                                    <h5 className="mb-3 h5 fw-600">Silver</h5>
                                </div>
                                <ul className="list-group list-group-raw fs-15 mb-5">
                                    <li className="list-group-item py-2">
                                        <i className="las la-check text-success mr-2"></i>
                                        10 Product Upload Limit
                                    </li>
                                </ul>
                                <div className="mb-5 d-flex align-items-center justify-content-center">
                                    <span className="fs-30 fw-600 lh-1 mb-0">ZK500.00</span>
                                    <span className="text-secondary border-left ml-2 pl-2">90<br />Days</span>
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary fw-600">Purchase Package</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="text-center mb-4 mt-3">
                                    <img className="mw-100 mx-auto mb-4" src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" style={{width:"120px"}}/>
                                    <h5 className="mb-3 h5 fw-600">Gold</h5>
                                </div>
                                <ul className="list-group list-group-raw fs-15 mb-5">
                                    <li className="list-group-item py-2">
                                        <i className="las la-check text-success mr-2"></i>
                                        30 Product Upload Limit
                                    </li>
                                </ul>
                                <div className="mb-5 d-flex align-items-center justify-content-center">
                                    <span className="fs-30 fw-600 lh-1 mb-0">ZK1,000.00</span>
                                    <span className="text-secondary border-left ml-2 pl-2">180<br />Days</span>
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary fw-600">Purchase Package</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default SellerPackages