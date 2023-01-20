function RecievedRefundComp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Refund Requests</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row gutters-5">
                            <h5 className="mb-0 h6">All Refund Request</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                                <thead>
                                    <tr className="footable-header">
                                        <th style={{ display: " table-cell" }}>#</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Date</th>
                                        <th style={{ display: " table-cell" }}>Order Id</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Product</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Amount</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Status</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Reason</th>
                                        <th style={{ display: " table-cell" }}>Approval</th>
                                        <th data-breakpoints="lg" style={{ display: " table-cell" }}>Reject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="footable-empty">
                                        <td colSpan="9">Nothing found</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="aiz-pagination"></div>
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
export default RecievedRefundComp;