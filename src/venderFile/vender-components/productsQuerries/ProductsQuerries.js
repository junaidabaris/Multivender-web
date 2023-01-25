function ProductsQuerries() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Product Queries</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" cellSpacing="0" width="100%">
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: "table-cell" }}>#</th>
                                        <th style={{ display: "table-cell" }}>User Name</th>
                                        <th style={{ display: "table-cell" }}>Product Name</th>
                                        <th data-breakpoints="lg" style={{ display: "table-cell" }}>Question</th>
                                        <th data-breakpoints="lg" style={{ display: "table-cell" }}>Reply</th>
                                        <th style={{ display: "table-cell" }}>Status</th>
                                        <th className="text-right footable-last-visible" style={{ display: "table-cell" }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: "table-cell" }}>1</td>
                                        <td style={{ display: "table-cell" }}>Azharuddin Shamim</td>
                                        <td style={{ display: "table-cell" }}>Ammonium Nitrate</td>
                                        <td style={{ display: "table-cell" }}>Good to see. Whats t bulk price. Plz.</td>
                                        <td style={{ display: "table-cell" }}>okk the pice is cheaper than market</td>
                                        <td style={{ display: "table-cell" }}>
                                            <span className="badge badge-inline badge-success">
                                                Replied
                                            </span>
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/seller/product-queries/eyJpdiI6Ikh4QXJ2RDhhdU80eXkxa0dkODE0aEE9PSIsInZhbHVlIjoieTJYVWZ5K0Y4SEp5L3NzRjBoWUhlQT09IiwibWFjIjoiMTkwODc0Yjg5Y2FhZDMzNTA0OGQxZmNkYWFlMmZmMGIyZWFmMzYzNGUyZTVlNzQ4ZjBiYmZhOWVmNmJmZTE2NCIsInRhZyI6IiJ9" title="View">
                                                <i className="las la-eye"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="aiz-pagination">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
                    <p className="mb-0">Abaris</p>
                </div>
            </div>
        </>
    )
}
export default ProductsQuerries;