function CategoriesAdmin() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All categories</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <a href="https://mmslfashions.in/admin/categories/create" className="btn btn-primary">
                                    <span>Add New category</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-block d-md-flex">
                            <h5 className="mb-0 h6">Categories</h5>
                            <form className id="sort_categories" action method="GET">
                                <div className="box-inline pad-rgt pull-left">
                                    <div className style={{ minWidth: 200 }}>
                                        <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="rlhs3j" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-body">
                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Name</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Parent Category</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Order Level</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Level</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Banner</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Icon</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th><th data-breakpoints="lg" style={{ display: 'table-cell' }}>Commission</th><th width="10%" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>Fertilizer</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/0fszFBvsXqbAUVAsKTXrOAVHBnuvUvHsVeWjuqji.png" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={1} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/1?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/1" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>2</td><td style={{ display: 'table-cell' }}>Specialty Fertilizer</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/VRg3fxSHDaSL6GfE9o05ropnhBao78kMgl0mvIqR.png" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={2} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/2?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/2" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>3</td><td style={{ display: 'table-cell' }}>Agro Chemicals</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/zNg9tlDvU7nCORhtIwFGhFzBpbPAoNwUL3FWpkpx.png" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={3} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/3?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/3" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>4</td><td style={{ display: 'table-cell' }}>Tools &amp; Equipments</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/X8h9TcK3S4MFhEH7HiV62ewEnG1S3Jgq1UlzvRtu.png" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={4} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/4?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/4" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>5</td><td style={{ display: 'table-cell' }}>Seeds</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/VRg3fxSHDaSL6GfE9o05ropnhBao78kMgl0mvIqR.png" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={5} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/5?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/5" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>6</td><td style={{ display: 'table-cell' }}>Polymer Polyolefin</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>
                                            <img src="https://mmslfashions.in/public/uploads/all/0mM656EXmjvm5VJWhFFvXDaU6W8FZHYfzWCaQOSs.jpg" alt="Banner" className="h-50px" />
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={6} defaultChecked />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/6?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/6" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>7</td><td style={{ display: 'table-cell' }}>Insecticide</td><td style={{ display: 'table-cell' }}>
                                            Agro Chemicals
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={7} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/7?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/7" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>8</td><td style={{ display: 'table-cell' }}>Straight Fertilizer</td><td style={{ display: 'table-cell' }}>
                                            Fertilizer
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <span className="avatar avatar-square avatar-xs">
                                                <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                                            </span>
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={8} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/8?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/8" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>9</td><td style={{ display: 'table-cell' }}>Foliar Fertilizer</td><td style={{ display: 'table-cell' }}>
                                            Specialty Fertilizer
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={9} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/9?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/9" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>10</td><td style={{ display: 'table-cell' }}>Water Soluble Fertilizer</td><td style={{ display: 'table-cell' }}>
                                            Specialty Fertilizer
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={10} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/10?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/10" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>11</td><td style={{ display: 'table-cell' }}>Blended Fartilizer</td><td style={{ display: 'table-cell' }}>
                                            Specialty Fertilizer
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={11} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/11?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/11" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>12</td><td style={{ display: 'table-cell' }}>Enhanced Granular Blends</td><td style={{ display: 'table-cell' }}>
                                            Specialty Fertilizer
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={12} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/12?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/12" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>13</td><td style={{ display: 'table-cell' }}>Herbicide</td><td style={{ display: 'table-cell' }}>
                                            Agro Chemicals
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={13} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/13?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/13" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>14</td><td style={{ display: 'table-cell' }}>Animal DIP</td><td style={{ display: 'table-cell' }}>
                                            Agro Chemicals
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={14} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/14?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/14" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr><tr>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>15</td><td style={{ display: 'table-cell' }}>Fumigant</td><td style={{ display: 'table-cell' }}>
                                            Agro Chemicals
                                        </td><td style={{ display: 'table-cell' }}>0</td><td style={{ display: 'table-cell' }}>1</td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            —
                                        </td><td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input type="checkbox" onchange="update_featured(this)" defaultValue={15} />
                                                <span />
                                            </label>
                                        </td><td style={{ display: 'table-cell' }}>0 %</td><td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/categories/edit/15?lang=en" title="Edit">
                                                <i className="las la-edit" />
                                            </a>
                                            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/admin/categories/destroy/15" title="Delete">
                                                <i className="las la-trash" />
                                            </a>
                                        </td></tr></tbody>
                            </table>
                            <div className="aiz-pagination">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                            <span className="page-link" aria-hidden="true">‹</span>
                                        </li>
                                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                        <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/categories?page=2">2</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="https://mmslfashions.in/admin/categories?page=2" rel="next" aria-label="Next »">›</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default CategoriesAdmin;