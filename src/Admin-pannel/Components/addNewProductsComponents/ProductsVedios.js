function ProductsVedios() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Videos</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Video Provider</label>
                        <div className="col-md-8">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="video_provider" id="video_provider" tabIndex={-98}>
                                <option value="youtube">Youtube</option>
                                <option value="dailymotion">Dailymotion</option>
                                <option value="vimeo">Vimeo</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" data-id="video_provider" title="Youtube" fdprocessedid="ynyivn"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Youtube</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-3" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Video Link</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" />
                            <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsVedios;