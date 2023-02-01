function Brands() {
    return (
        <>
            <div className=" col-lg-7 ">
                <div className="card">
                    <div className="card-header row gutters-5">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Brands</h5>
                        </div>
                        <div className="col-md-4">
                            <form className id="sort_brands" action method="GET">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="jv5p0d" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>Logo</th><th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>ETG</td><td style={{ display: 'table-cell' }}>
                                        <img src="https://mmslfashions.in/public/uploads/all/AkvOmGh1LRAnHZmlVDsgPA5f5jgYesnZxVtONnhX.png" alt="Brand" className="h-50px" />
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/brands/edit/1?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/brands/destroy/1" title="Delete">
                                            <i className="las la-trash" />
                                        </a>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Falcon</td><td style={{ display: 'table-cell' }}>
                                        <img src="https://mmslfashions.in/public/uploads/all/Wnhuad4Xbhfy69Jd8MN8PHGvoGO8hnFcYDs9EnX2.png" alt="Brand" className="h-50px" />
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/brands/edit/3?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/brands/destroy/3" title="Delete">
                                            <i className="las la-trash" />
                                        </a>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Kynoch</td><td style={{ display: 'table-cell' }}>
                                        <img src="https://mmslfashions.in/public/uploads/all/z1CNIkuY8rhgQFW7r8RvWWA0akrBbMCTOPgaKzja.png" alt="Brand" className="h-50px" />
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/brands/edit/2?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/brands/destroy/2" title="Delete">
                                            <i className="las la-trash" />
                                        </a>
                                    </td></tr><tr>
                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>OEMFF</td><td style={{ display: 'table-cell' }}>
                                        <img src="https://mmslfashions.in/public/uploads/all/ClBKaveL2CshSfloa9MHVGkI3l8coNtciAHjCfS9.png" alt="Brand" className="h-50px" />
                                    </td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/brands/edit/4?lang=en" title="Edit">
                                            <i className="las la-edit" />
                                        </a>
                                        <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/brands/destroy/4" title="Delete">
                                            <i className="las la-trash" />
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
export default Brands