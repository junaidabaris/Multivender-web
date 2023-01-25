function CommissionHistory() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form className id="sort_commission_history">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">Commission History</h5>
                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                    //   className="form-control form-control-sm aiz-date-range"
                      id="search"
                    //   name="date_range"
                      placeholder="Daterange"
                    //   autoComplete="off"
                    //   fdprocessedid="ftetei"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    //   fdprocessedid="m1jp5"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="card-body">
              <table
                className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                // style={{}}
              >
                <thead>
                  <tr className="footable-header">
                    <th style={{ display: "table-cell" }}>#</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Order Code:
                    </th>
                    <th style={{ display: "table-cell" }}>Admin Commission</th>
                    <th style={{ display: "table-cell" }}>Earning</th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="footable-empty">
                    <td colSpan={5}>Nothing found</td>
                  </tr>
                </tbody>
              </table>
              {/* <div className="aiz-pagination mt-4"></div> */}
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
          <p className="mb-0">Abaris Softech</p>
        </div>
      </div>
    </>
  );
}
export default CommissionHistory;
