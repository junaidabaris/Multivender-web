function SupprotTicket() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Support Ticket</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mx-auto mb-3">
                            <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition" data-toggle="modal" data-target="#ticket_modal">
                                <span className="size-70px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                                    <i className="las la-plus la-3x text-white"></i>
                                </span>
                                <div className="fs-20 text-primary">Create a Ticket</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Tickets</h5>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: "tableCell" }}>Ticket ID</th>
                                        <th data-breakpoints="lg" style={{ display: "tableCell" }}>Sending Date</th>
                                        <th style={{ display: "tableCell" }}>Subject</th>
                                        <th style={{ display: "tableCell" }}>Status</th>
                                        <th data-breakpoints="lg" className="footable-last-visible" style={{ display: "tableCell" }}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: "tableCell" }}>#10000035</td>
                                        <td style={{ display: "tableCell" }}>2023-01-22 11:04:15</td>
                                        <td style={{ display: "tableCell" }}>Good evening, top urgently run t primeroutes.in wordpress web at root directory. Thanks.</td>
                                        <td style={{ display: "tableCell" }}>
                                            <span className="badge badge-inline badge-danger">Pending</span>
                                        </td>
                                        <td className="footable-last-visible" style={{ display: "tableCell" }}>
                                            <a href="https://mmslfashions.in/seller/support_ticket/show/eyJpdiI6IjZPSFNsTThic1RqeForM29wVDFGUGc9PSIsInZhbHVlIjoiLzM3MG13bThtMlIwZzVrRWpwOU55UT09IiwibWFjIjoiMjRjOTcyMGEzZTZjMTUwZjkzZTIwY2RjMGM1Yjg3MDQ0ZjQ3NTY2Mjc0YWJiMzQ4Yjc4NjZjMTJiNDg4YTk3MyIsInRhZyI6IiJ9" className="btn btn-styled btn-link py-1 px-0 icon-anim text-underline--none">
                                                View Details
                                                <i className="la la-angle-right text-sm"></i>
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
                    <p className="mb-0">Abaris Softech</p>
                </div>
            </div>
        </>
    )
}
export default SupprotTicket;