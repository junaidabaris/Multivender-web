function Digitalproduct() {
    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="aiz-titlebar mt-2 mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="h3">Digital Products</h1>
                        </div>
                    </div>
                </div>

                <div className="row gutters-10 justify-content-center">
                    <div className="col-md-4 mx-auto mb-3">
                        <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
                            <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
                                <i className="las la-upload la-2x text-white"></i>
                            </span>
                            <div className="px-3 pt-3 pb-3">
                                <div className="h4 fw-700 text-center">27</div>
                                <div className="opacity-50 text-center">Remaining Uploads</div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mx-auto mb-3">
                        <a href="https://mmslfashions.in/seller/digitalproducts/create">
                            <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                                <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                                    <i className="las la-plus la-3x text-white"></i>
                                </span>
                                <div className="fs-18 text-primary">Add New Digital Product</div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="https://mmslfashions.in/seller/seller-packages" className="text-center bg-white shadow-sm hov-shadow-lg text-center d-block p-3 rounded">
                            <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" height="44" className="mw-100 mx-auto"/>
                                <span className="d-block sub-title mb-2">Current Package: Gold</span>
                                <div className="btn btn-outline-primary py-1">Upgrade Package</div>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">All products</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" >
                            <thead>
                                <tr className="footable-header">
                                    <th style={{display: "table-cell"}}>#</th><th width="30%" style={{display: "table-cell"}}>Name</th><th data-breakpoints="md" style={{display: "table-cell"}}>Category</th><th data-breakpoints="md" style={{display: "table-cell"}}>Base Price</th><th data-breakpoints="md" style={{display: "table-cell"}}>Published</th><th data-breakpoints="md" style={{display: "table-cell"}}>Featured</th><th className="text-right" style={{display: "table-cell"}}>Options</th></tr>
                            </thead>

                            <tbody>
                                <tr className="footable-empty"><td colSpan="7">Nothing found</td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">

                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
                <p className="mb-0">??  v6.3.3</p>
            </div>
        </div>
    </>
}
export default Digitalproduct