function ReviewsCard() {
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Product Reviews</h5>
        </div>
        <div className="card-body">
            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" >
                <thead>
                    <tr className="footable-header">
                        <th style={{display: "table-cell"}}>#</th>
                        <th style={{display: "table-cell"}}>Product</th>
                        <th data-breakpoints="lg" style={{display: "table-cell"}}>Customer</th>
                        <th style={{display: "table-cell"}}>Rating</th>
                        <th data-breakpoints="lg" style={{display: "table-cell"}}>Comment</th>
                        <th data-breakpoints="lg" style={{display: "table-cell"}}>Published</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="footable-empty"><td colSpan="6">Nothing found</td></tr></tbody>
            </table>
            <div className="aiz-pagination">

            </div>
        </div>
    </div>
}
export default ReviewsCard