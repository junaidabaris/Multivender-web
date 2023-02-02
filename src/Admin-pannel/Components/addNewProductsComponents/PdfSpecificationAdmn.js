function PdfSpecificationAdmin() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">PDF Specification</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">PDF Specification</label>
                        <div className="col-md-8">
                            <div className="input-group" data-toggle="aizuploader" data-type="document">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">Choose File</div>
                                <input type="hidden" name="pdf" className="selected-files" />
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
export default PdfSpecificationAdmin;