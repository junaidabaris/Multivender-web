function SupprotTicket() {
    return (
        <>
            <div className="aiz-user-panel">
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
                                <i className="las la-plus la-3x text-white" />
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
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>Ticket ID</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Sending Date</th><th style={{ display: 'table-cell' }}>Subject</th><th style={{ display: 'table-cell' }}>Status</th><th data-breakpoints="lg" className="footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>#1000003631</td><td style={{ display: 'table-cell' }}>2023-01-22 11:12:39</td><td style={{ display: 'table-cell' }}>Good evening, top urgently send my item to home delivery address. Thanks.</td><td style={{ display: 'table-cell' }}>
                                        <span className="badge badge-inline badge-danger">Pending</span>
                                    </td><td className="footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a href="https://mmslfashions.in/support_ticket/eyJpdiI6Im5CUjlMODRvOGFBekQ3cEFlYStGUmc9PSIsInZhbHVlIjoiU0ZQNERPNVVsWERuY1Rhai9JOXN6dz09IiwibWFjIjoiNDI3NTEwYzMwNzQzMDk1NDZlMWNhYzgyMjk1OWU2Mzk5YzUwYTVlMjc5M2Y4YTdhMmI5M2NlY2UwZTU5ZDkzMiIsInRhZyI6IiJ9" className="btn btn-styled btn-link py-1 px-0 icon-anim text-underline--none">
                                            View Details
                                            <i className="la la-angle-right text-sm" />
                                        </a>
                                    </td></tr></tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SupprotTicket;