import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Wallet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div
              className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition"
              onClick={handleShow}
            >
              <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                <i className="las la-plus la-3x text-white" />
              </span>
              <div className="fs-18 text-primary">Recharge Wallet</div>
            </div>
            <Modal className="modle-modle" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Recharge Wallet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form
                  className
                  action="https://mmslfashions.in/recharge"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="MoHAlb8S7euhayHMHwtxz1HtQ7lbaDq86q1ffWtT"
                  />{" "}
                  <div className="modal-body gry-bg px-3 pt-3">
                    <div className="row">
                      <div className="col-md-4">
                        <label>
                          Amount <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          lang="en"
                          className="form-control mb-3"
                          name="amount"
                          placeholder="Amount"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <label>
                          Payment method <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-3">
                          <div className="dropdown ">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value="1">Lyzico</option>
                              <option value="2">Flutterwave</option>
                              <option value="3">payfast</option>
                            </select>
                            {/* <select
                              className="form-control selectpicker"
                              name="payment_option"
                              
                            >
                              <option value="iyzico">Iyzico</option>
                              <option value="flutterwave">flutterwave</option>
                              <option value="payfast">payfast</option>
                            </select>
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-toggle="dropdown"
                              role="combobox"
                              aria-owns="bs-select-1"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              title="Iyzico"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    Iyzico
                                  </div>
                                </div>{" "}
                              </div>
                            </button> */}
                            {/* <div className="dropdown-menu ">
                              <div className="bs-searchbox">
                                <input
                                  type="search"
                                  className="form-control"
                                  autoComplete="off"
                                  role="combobox"
                                  aria-label="Search"
                                  aria-controls="bs-select-1"
                                  aria-autocomplete="list"
                                />
                              </div>
                              <div
                                className="inner show"
                                role="listbox"
                                id="bs-select-1"
                                tabIndex={-1}
                              >
                                <ul
                                  className="dropdown-menu inner show"
                                  role="presentation"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group text-right">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary transition-3d-hover mr-1"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-md-4 mx-auto mb-3">
            <div
              className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition"
              // onClick={handleSho2}
            >
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
