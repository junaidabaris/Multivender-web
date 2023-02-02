function ProductsPriceStock() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product price + stock</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit price <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Unit price" name="unit_price" className="form-control" required fdprocessedid="lxeax" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 control-label" htmlFor="start_date">Discount Date Range</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control aiz-date-range" name="date_range" placeholder="Select Date" data-time-picker="true" data-format="DD-MM-Y HH:mm:ss" data-separator=" to " autoComplete="off" fdprocessedid="6b89fg" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Discount <span className="text-danger">*</span></label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Discount" name="discount" className="form-control" required fdprocessedid="itgbrj" />
                        </div>
                        <div className="col-md-3">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="discount_type" tabIndex={-98}>
                                <option value="amount">Flat</option>
                                <option value="percent">Percent</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-6" aria-haspopup="listbox" aria-expanded="false" title="Flat" fdprocessedid="r56t5j"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Flat</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-6" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            Set Point
                        </label>
                        <div className="col-md-6">
                            <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder={1} name="earn_point" className="form-control" fdprocessedid="w0aria" />
                        </div>
                    </div>
                    <div id="show-hide-div">
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Quantity <span className="text-danger">*</span></label>
                            <div className="col-md-6">
                                <input type="number" lang="en" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="rqqg2h" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">
                                SKU
                            </label>
                            <div className="col-md-6">
                                <input type="text" placeholder="SKU" name="sku" className="form-control" fdprocessedid="urwk0c" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            External link
                        </label>
                        <div className="col-md-9">
                            <input type="text" placeholder="External link" name="external_link" className="form-control" fdprocessedid="a2l3r" />
                            <small className="text-muted">Leave it blank if you do not use external site link</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">
                            External link button text
                        </label>
                        <div className="col-md-9">
                            <input type="text" placeholder="External link button text" name="external_link_btn" className="form-control" fdprocessedid="9oltko" />
                            <small className="text-muted">Leave it blank if you do not use external site link</small>
                        </div>
                    </div>
                    <br />
                    <div className="sku_combination" id="sku_combination">
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPriceStock;