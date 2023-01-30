function Wallet() {
  return (
    <>
     <div className="aiz-user-panel">
  <div className="aiz-titlebar mt-2 mb-4">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="h3">My Wallet</h1>
      </div>
    </div>
  </div>
  <div className="row gutters-10">
    <div className="col-md-4 mx-auto mb-3">
      <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
        <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
          <i className="las la-dollar-sign la-2x text-white" />
        </span>
        <div className="px-3 pt-3 pb-3">
          <div className="h4 fw-700 text-center">ZK1,000.00</div>
          <div className="opacity-50 text-center">Wallet Balance</div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mx-auto mb-3">
      <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition" onclick="show_wallet_modal()">
        <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
          <i className="las la-plus la-3x text-white" />
        </span>
        <div className="fs-18 text-primary">Recharge Wallet</div>
      </div>
    </div>
    <div className="col-md-4 mx-auto mb-3">
      <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition" onclick="show_make_wallet_recharge_modal()">
        <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
          <i className="las la-plus la-3x text-white" />
        </span>
        <div className="fs-18 text-primary">Offline Recharge Wallet</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <h5 className="mb-0 h6">Wallet Recharge History</h5>
    </div>
    <div className="card-body">
      <table className="table aiz-table mb-0 aiz-table-2">
        <thead>
          <tr>
            <th>#</th>
            <th data-breakpoints="lg">Date</th>
            <th>Amount</th>
            <th data-breakpoints="lg">Payment method</th>
            <th className="text-right">Approval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>27-01-2023</td>
            <td>ZK0.00</td>
            <td>Club Point Convert</td>
            <td className="text-right">N/A</td>
          </tr>
          <tr>
            <td>2</td>
            <td>20-12-2022</td>
            <td>ZK1,000.00</td>
            <td>Payfast</td>
            <td className="text-right">N/A</td>
          </tr>
        </tbody>
      </table>
      <div className="aiz-pagination" />
    </div>
  </div>
</div>

    </>
  );
}
export default Wallet;
