function PaymentHistory() {
  return (
    
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Payment History</h5>
            </div>
            <div className="card-body">
              <table className="table aiz-table mb-0 aiz-table-2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>13-01-2023</td>
                    <td>ZK50.00</td>
                    <td>Bank payment </td>
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
    // </div>
    // </div> 
  
  );
}
export default PaymentHistory;
