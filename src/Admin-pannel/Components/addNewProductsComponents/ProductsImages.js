function ProductsImages() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Images</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Gallery Images <small>(600x600)</small></label>
                        <div className="col-md-8">
                            <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="true">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">Choose File</div>
                                <input type="hidden" name="photos" className="selected-files" />
                            </div>
                            <div className="file-preview box sm">
                            </div>
                            <small className="text-muted">These images are visible in product details page gallery. Use 600x600 sizes images.</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Thumbnail Image <small>(300x300)</small></label>
                        <div className="col-md-8">
                            <div className="input-group" data-toggle="aizuploader" data-type="image">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                </div>
                                <div className="form-control file-amount">Choose File</div>
                                <input type="hidden" name="thumbnail_img" className="selected-files" />
                            </div>
                            <div className="file-preview box sm">
                            </div>
                            <small className="text-muted">This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around main object of your image as we had to crop some edge in different devices to make it responsive.</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsImages;