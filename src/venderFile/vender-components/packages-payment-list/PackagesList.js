function PackagesList() {
    return <>
        <div className="card">
            <div className="card-header row gutters-5">
                <div className="col">
                    <h5 className="mb-md-0 h6">All Purchase Package</h5>
                </div>
            </div>
            <div className="card-body">
                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" >
                    <thead>
                        <tr className="footable-header">
                            <th className="footable-first-visible" style={{display: "table-cell"}}>#</th>
                            <th width="30%" style={{display: "table-cell"}}>Package</th>
                            <th data-breakpoints="md" style={{display: "table-cell"}}>Package Price</th>
                            <th data-breakpoints="md" className="footable-last-visible" style={{display: "table-cell"}}>Payment Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="footable-first-visible" style={{display: "table-cell"}}>1</td>

                            <td style={{display: "table-cell"}}>Gold</td>
                            <td style={{display: "table-cell"}}>1000</td>
                            <td className="footable-last-visible" style={{display: "table-cell"}}>
                                Offline payment
                            </td>
                        </tr>
                        <tr>
                            <td className="footable-first-visible" style={{display: "table-cell"}}>2</td>
                            <td style={{display: "table-cell"}}>Gold</td>
                            <td style={{display: "table-cell"}}>1000</td>
                            <td className="footable-last-visible" style={{display: "table-cell"}}>Online payment</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </>
}
export default PackagesList