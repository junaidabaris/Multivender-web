function VenderBanner() {
  return (
    <>
    <div class="aiz-main-content">
				<div class="px-15px px-lg-25px">

<div className="aiz-titlebar mt-2 mb-4">
      <div className="row align-items-center">
        <div className="col-md-6">
            <h1 className="h3">Banners</h1>
        </div>
      </div>
    </div>

      <div className="row gutters-10 justify-content-center">
        <div className="col-md-4 mx-auto mb-3">
          <a href="https://mmslfashions.in/seller/banner/create" className="create-a">
            <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
              <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                <i className="las la-plus la-3x text-white"></i>
              </span>
              <div className="fs-18 text-primary">Add New Banner</div>
            </div>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-header row gutters-5">
          <div className="col">
            <h5 className="mb-md-0 h6">All Banners</h5>
          </div>
          <div className="col-md-4">
            <form className="" id="sort_brands" action="" method="GET">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="search"
                  placeholder="Search Banner"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="card-body">
          <table className="table aiz-table mb-0 aiz-table-2">
            <thead>
              <tr>
                <th>#</th>
                <th width="30%">Name</th>
                <th width="30%">Image</th>
                <th data-breakpoints="md">Approval</th>

                <th data-breakpoints="md" className="text-right">
                  Options
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Banner 2</td>

                <td>
                  <a
                    href="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png"
                    target="_blank"
                    className="text-reset"
                  >
                    <img
                      src="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png"
                      height="100"
                      className="mr-1"
                    />
                  </a>
                </td>

                <td>
                  <span className="badge badge-inline badge-info">Pending</span>
                </td>

                <td className="text-right">
                  <a
                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                    href="https://mmslfashions.in/seller/banner/2/edit?lang=en"
                    title="Edit"
                  >
                    <i className="las la-edit"></i>
                  </a>

                  <a
                    href="#"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://mmslfashions.in/seller/banners/destroy/2"
                    title="Delete"
                  >
                    <i className="las la-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Banner 1</td>

                <td>
                  <a
                    href="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png"
                    target="_blank"
                    className="text-reset"
                  >
                    <img
                      src="https://mmslfashions.in/public/uploads/all/Nx70PCRmd0brMGlmMCO68H8L2kJo1D8Nmsg25AwV.png"
                      height="100"
                      className="mr-1"
                    />
                  </a>
                </td>

                <td>
                  <span className="badge badge-inline badge-info">Pending</span>
                </td>

                <td className="text-right">
                  <a
                    className="btn btn-soft-info btn-icon btn-circle btn-sm"
                    href="https://mmslfashions.in/seller/banner/1/edit?lang=en"
                    title="Edit"
                  >
                    <i className="las la-edit"></i>
                  </a>

                  <a
                    href="#"
                    className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                    data-href="https://mmslfashions.in/seller/banners/destroy/1"
                    title="Delete"
                  >
                    <i className="las la-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="aiz-pagination"></div>
        </div>
      </div>

      <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
        <p className="mb-0">&copy; v6.3.3</p>
      </div>
      </div>
      </div>
    </>
  );
}
export default VenderBanner;
