function CouponsComp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Coupons</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-10 justify-content-center">
                        <div className="col-md-4 mx-auto mb-3">
                            <a href="https://mmslfashions.in/seller/coupon/create">
                                <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                                    <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                                        <i className="las la-plus la-3x text-white"></i>
                                    </span>
                                    <div className="fs-18 text-primary">Add New Coupon</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <div className="col">
                                <h5 className="mb-md-0 h6">All Coupons</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table p-0 footable footable-1 breakpoint-xl">
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: "table-cell" }}>#</th>
                                        <th style={{ display: "table-cell" }}>Code</th>
                                        <th data-breakpoints="lg" style={{ display: "table-cell" }}>Type</th>
                                        <th data-breakpoints="lg" style={{ display: "table-cell" }}>Start Date</th>
                                        <th data-breakpoints="lg" style={{ display: "table-cell" }}>End Date</th>
                                        <th width="10%" className="footable-last-visible" style={{ display: "table-cell" }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: "table-cell" }}>1</td><td style={{ display: "table-cell" }}>3333</td><td style={{ display: "table-cell" }}>                                    Product Base
                                        </td><td style={{ display: "table-cell" }}>20-01-2023</td><td style={{ display: "table-cell" }}>20-02-2023</td><td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/seller/coupon/eyJpdiI6ImllMnZwdExLOG83TUlWaTE3MFZLR3c9PSIsInZhbHVlIjoibDUxZlg3MFlPcWR3NG5WdEpNdEludz09IiwibWFjIjoiZGYxZWU5M2ZhMzNjZmVmMDMzZjg1NGFkZjQzOTlmZTY1ZDJjZjFiZWU0NmE4ZjIyZDliZmU5NzhhMGQ0MzM1NCIsInRhZyI6IiJ9/edit" title="Edit">
                                                <i className="las la-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/seller/coupon/destroy/2" title="Delete">
                                                <i className="las la-trash"></i>
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: "table-cell" }}>2</td><td style={{ display: "table-cell" }}>123888</td><td style={{ display: "table-cell" }}>                                    Product Base
                                        </td><td style={{ display: "table-cell" }}>17-01-2023</td><td style={{ display: "table-cell" }}>31-01-2023</td><td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/seller/coupon/eyJpdiI6Imd1YnZ4SktxTHJ2SzFXTlBRbmIrTlE9PSIsInZhbHVlIjoibXQvcGtGcG1rRmg1V3lUV2FkcEI0Zz09IiwibWFjIjoiYzg5MzRkNzdkYjU3ODhmZTQ5ZGY5NzY1ZGYxNWFjNDVmN2VmM2MxZjMwZjNlNzYwNGIyNzk4ZWVjNWJjOWE4OSIsInRhZyI6IiJ9/edit" title="Edit">
                                                <i className="las la-edit"></i>
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/seller/coupon/destroy/1" title="Delete">
                                                <i className="las la-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
                    <p className="mb-0">©  v6.3.3</p>
                </div>
            </div>
        </>
    )
}
export default CouponsComp;