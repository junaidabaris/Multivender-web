function MoneyWithdrow() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar mt-2 mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">Money Withdraw</h1>
              </div>
            </div>
          </div>

          <div className="row gutters-10">
            <div className="col-md-4 mb-3 ml-auto">
              <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
                <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
                  <i className="las la-dollar-sign la-2x text-white"></i>
                </span>
                <div className="px-3 pt-3 pb-3">
                  <div className="h4 fw-700 text-center">ZK28.40</div>
                  <div className="opacity-50 text-center">Pending Balance</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mr-auto">
              <div
                className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition"
                onclick="show_request_modal()"
              >
                <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                  <i className="las la-plus la-3x text-white"></i>
                </span>
                <div className="fs-18 text-primary">Send Withdraw Request</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Withdraw Request history</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 aiz-table-2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th data-breakpoints="lg">Status</th>
                    <th data-breakpoints="lg" width="60%">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>28-11-2022</td>
                    <td>ZK50.00</td>
                    <td>
                      <span className=" badge badge-inline badge-success">
                        Paid
                      </span>
                    </td>
                    <td>Please send us t payment.</td>
                  </tr>
                </tbody>
              </table>
              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
          <p className="mb-0">&copy; v6.3.3</p>
        </div>
      </div>
      {/* </div> */}
      {/* // </div> */}
    </>
  );
}
export default MoneyWithdrow;
