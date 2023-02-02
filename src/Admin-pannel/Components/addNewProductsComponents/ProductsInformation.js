function ProductsInformationAdmin() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Product Information</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="name" placeholder="Product Name" onchange="update_sku()" required fdprocessedid="3bss68" />
                        </div>
                    </div>
                    <div className="form-group row" id="category">
                        <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="category_id" id="category_id" data-live-search="true" required tabIndex={-98}>
                                <option value={1}>Fertilizer</option>
                                <option value={8}>-- Straight Fertilizer</option>
                                <option value={2}>Specialty Fertilizer</option>
                                <option value={9}>-- Foliar Fertilizer</option>
                                <option value={10}>-- Water Soluble Fertilizer</option>
                                <option value={11}>-- Blended Fartilizer</option>
                                <option value={12}>-- Enhanced Granular Blends</option>
                                <option value={3}>Agro Chemicals</option>
                                <option value={7}>-- Insecticide</option>
                                <option value={13}>-- Herbicide</option>
                                <option value={14}>-- Animal DIP</option>
                                <option value={15}>-- Fumigant</option>
                                <option value={16}>-- Fungicide</option>
                                <option value={17}>-- Nematode</option>
                                <option value={18}>-- Plant Regulator</option>
                                <option value={19}>-- Inoculant</option>
                                <option value={4}>Tools &amp; Equipments</option>
                                <option value={23}>-- EIHL Others</option>
                                <option value={24}>-- Animal Feed</option>
                                <option value={5}>Seeds</option>
                                <option value={20}>-- Maize Seed</option>
                                <option value={21}>-- Vegetable Seed</option>
                                <option value={6}>Polymer Polyolefin</option>
                                <option value={22}>Soybean Seeds</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="category_id" title="Fertilizer" fdprocessedid="zkgwps"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Fertilizer</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                        </div>
                    </div>
                    <div className="form-group row" id="brand">
                        <label className="col-md-3 col-from-label">Brand</label>
                        <div className="col-md-8">
                            <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="brand_id" id="brand_id" data-live-search="true" tabIndex={-98}>
                                <option value>Select Brand</option>
                                <option value={1}>ETG</option>
                                <option value={2}>Kynoch</option>
                                <option value={3}>Falcon</option>
                                <option value={4}>OEMFF</option>
                            </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="brand_id" title="Select Brand" fdprocessedid="6j3sin"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Brand</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Unit</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="unit" placeholder="Unit (e.g. KG, Pc etc)" required fdprocessedid="nnwct" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                        <div className="col-md-8">
                            <input type="number" className="form-control" name="weight" step="0.01" defaultValue={0.00} placeholder={0.00} fdprocessedid="sq5qc3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <input type="number" lang="en" className="form-control" name="min_qty" defaultValue={1} min={1} required fdprocessedid="d0gl3m" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span></label>
                        <div className="col-md-8">
                            <tags className="tagify  form-control aiz-tag-input" aria-haspopup="listbox" aria-expanded="false" role="tagslist" tabIndex={-1}>
                                <span contentEditable data-placeholder="Type and hit enter to add a tag" aria-placeholder="Type and hit enter to add a tag" className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />
                            </tags><input type="text" className="form-control aiz-tag-input" name="tags[]" placeholder="Type and hit enter to add a tag" />
                            <small className="text-muted">This is used for search. Input those words by which cutomer can find this product.</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Barcode</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-from-label">Refundable</label>
                        <div className="col-md-8">
                            <label className="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" name="refundable" defaultChecked defaultValue={1} />
                                <span />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsInformationAdmin;