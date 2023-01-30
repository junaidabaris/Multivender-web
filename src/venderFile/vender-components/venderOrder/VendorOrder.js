import { Link, useNavigate } from "react-router-dom";

function VenderOrder() {
  const navigate = useNavigate()
  const detailPage = () => {
    navigate("/seller/order-details")
  }
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form id="sort_orders" action="" method="GET">
              <div className="card-header row gutters-5">
                <div className="col text-center text-md-left">
                  <h5 className="mb-md-0 h6">Orders</h5>
                </div>
                <div className="col-md-3 ml-auto">
                  <select
                    className="form-control aiz-selectpicker"
                    data-placeholder="Filter by Payment Status"
                    name="payment_status"
                  >
                    <option value="">Filter by Payment Status</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Un-Paid</option>
                  </select>
                </div>

                <div className="col-md-3 ml-auto">
                  <select
                    className="form-control aiz-selectpicker"
                    data-placeholder="Filter by Payment Status"
                    name="delivery_status"
                  // onchange="sort_orders()"
                  >
                    <option value="">Filter by Deliver Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="on_delivery">On delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <div className="from-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      placeholder="Type Order code &amp; hit Enter"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="card-body p-3">
              <table className="table aiz-table mb-0 aiz-table-2" >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order Code:</th>
                    <th data-breakpoints="lg">Num. of Products</th>
                    <th data-breakpoints="lg">Customer</th>
                    <th data-breakpoints="md">Amount</th>
                    <th data-breakpoints="lg">Delivery Status</th>
                    <th>Payment Status</th>
                    <th className="text-right">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={detailPage}>
                    <td>1</td>
                    <td>
                      <a
                        href="#20221103-09563323"
                      >
                        20221103-09563323
                      </a>
                    </td>
                    <td>1</td>
                    <td>Azharuddin Shamim</td>
                    <td>ZK600.00</td>
                    <td>Pending</td>
                    <td>
                      <span className="badge badge-inline badge-danger">
                        Un-Paid
                      </span>
                    </td>
                    <td className="text-right">
                      <a
                        href="https://mmslfashions.in/seller/orders/eyJpdiI6Im9CY1V2WDBBVTRzd2tXVVEzbkI1WkE9PSIsInZhbHVlIjoiOWFyeWNEWjBkamViK240aklqTVZwQT09IiwibWFjIjoiNGFjNzkxOWVlYTAxNzA5OTgwODY3YjUxYzgyZGEwMTdlYWZmMTI1YzI4YWM1OWY0NmFhYmU5MzI5NWYyMDY0NiIsInRhZyI6IiJ9"
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        title="Order Details"
                      >
                        <i className="las la-eye"></i>
                      </a>
                      <a
                        href="https://mmslfashions.in/seller/invoice/3"
                        className="btn btn-soft-warning btn-icon btn-circle btn-sm"
                        title="Download Invoice"
                      >
                        <i className="las la-download"></i>
                      </a>
                    </td>
                  </tr>
                  <tr onClick={detailPage}>

                    <td>2</td>
                    <td>
                      <a
                        href="#20221006-19574683"

                      >
                        20221006-19574683
                      </a>
                    </td>
                    <td>1</td>
                    <td>Azharuddin Shamim</td>
                    <td>ZK220.00</td>
                    <td>Pending</td>
                    <td>
                      <span className="badge badge-inline badge-danger">
                        Un-Paid
                      </span>
                    </td>
                    <td className="text-right">
                      <a
                        href="https://mmslfashions.in/seller/orders/eyJpdiI6IlNRdWJGNEJVOG1kb3VnYkdBOExuY1E9PSIsInZhbHVlIjoiUUNLWDN0YUJlamtwQTQ3MDhVMG5PQT09IiwibWFjIjoiNmQ2MWRhYmZkMThmNzJlNjZkYzM4YzZjMDkyMGI3OWEzNTg2ZjljZTAxNjU0ZTc4ZjhkMGFhMmI2MjM0ZDA3ZiIsInRhZyI6IiJ9"
                        className="btn btn-soft-info btn-icon btn-circle btn-sm"
                        title="Order Details"
                      >
                        <i className="las la-eye"></i>
                      </a>
                      <a
                        href="https://mmslfashions.in/seller/invoice/2"
                        className="btn btn-soft-warning btn-icon btn-circle btn-sm"
                        title="Download Invoice"
                      >
                        <i className="las la-download"></i>
                      </a>
                    </td>
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
export default VenderOrder;
