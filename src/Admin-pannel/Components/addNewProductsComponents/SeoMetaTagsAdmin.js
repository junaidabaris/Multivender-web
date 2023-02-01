function SeoMetaTagsAdmin() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">SEO Meta Tags</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Meta Title</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Description</label>
                        <div className="col-md-8">
                            <textarea name="meta_description" rows={8} className="form-control" defaultValue={""} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Meta Image</label>
                        <div className="col-md-8">
                            <div className="input-group" data-toggle="aizuploader" data-type="image">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">Choose File</div>
                                <input type="hidden" name="meta_img" className="selected-files" />
                            </div>
                            <div className="file-preview box sm">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SeoMetaTagsAdmin;