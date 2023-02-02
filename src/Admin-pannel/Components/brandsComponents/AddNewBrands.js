function AddnewBrandsAdmin() {
    return (
        <>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Brand</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://mmslfashions.in/admin/brands" method="POST">
                            <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />						<div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Name" name="name" className="form-control" required fdprocessedid="coqov" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Logo <small>(120x80)</small></label>
                                <div className="input-group" data-toggle="aizuploader" data-type="image">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                    </div>
                                    <div className="form-control file-amount">Choose File</div>
                                    <input type="hidden" name="logo" className="selected-files" />
                                </div>
                                <div className="file-preview box sm">
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Meta Title</label>
                                <input type="text" className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="ijxnxb" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Meta description</label>
                                <textarea name="meta_description" rows={5} className="form-control" defaultValue={""} />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="f21vlf">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddnewBrandsAdmin;