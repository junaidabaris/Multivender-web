// import AddNewProducts from "../../Components/addNewProducts/AddNewProducts";
import ProductsDescriptionAdmin from "../../Components/addNewProductsComponents/ProductsDescriptionAdmin";
import ProductsImages from "../../Components/addNewProductsComponents/ProductsImages";
import ProductsInformationAdmin from "../../Components/addNewProductsComponents/ProductsInformation";
import ProductsPriceStock from "../../Components/addNewProductsComponents/ProductsPriceStock";
import ProductsVariation from "../../Components/addNewProductsComponents/ProductsVariation";
import ProductsVedios from "../../Components/addNewProductsComponents/ProductsVedios";
import SeoMetaTagsAdmin from "../../Components/addNewProductsComponents/SeoMetaTagsAdmin";
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";

function AddNewProductsPage() {
    return (
        <>
            {/* <AddNewProducts /> */}




            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <h5 className="mb-0 h6">Add New Product</h5>
                    </div>
                    <div className>
                        {/* Error Meassages */}
                        <form className="form form-horizontal mar-top" action="https://mmslfashions.in/admin/products/store" method="POST" encType="multipart/form-data" id="choice_form">
                            <div className="row gutters-5">


                                <div className="col-lg-8">
                                    <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />                <input type="hidden" name="added_by" defaultValue="admin" />
                                    <ProductsInformationAdmin />
                                    <ProductsImages />
                                    <ProductsVedios />
                                    <ProductsVariation />
                                    <ProductsPriceStock />
                                    <ProductsDescriptionAdmin />
                                    <SeoMetaTagsAdmin />
                                </div>

                                <div className="col-lg-4">

                                    <ShippingConfigurationAdmin />

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Low Stock Quantity Warning</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Quantity
                                                </label>
                                                <input type="number" name="low_stock_quantity" defaultValue={1} min={0} step={1} className="form-control" fdprocessedid="dtmr1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">
                                                Stock Visibility State
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock Quantity</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="radio" name="stock_visibility_state" defaultValue="quantity" defaultChecked />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="radio" name="stock_visibility_state" defaultValue="text" />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Hide Stock</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="radio" name="stock_visibility_state" defaultValue="hide" />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Cash on Delivery</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="cash_on_delivery" defaultValue={1} defaultChecked />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Featured</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="featured" defaultValue={1} />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Todays Deal</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="todays_deal" defaultValue={1} />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Flash Deal</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Add To Flash
                                                </label>
                                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="flash_deal_id" id="flash_deal" tabIndex={-98}>
                                                    <option value>Choose Flash Title</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" data-id="flash_deal" title="Choose Flash Title" fdprocessedid="5qasuo"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Choose Flash Title</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-7" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Discount
                                                </label>
                                                <input type="number" name="flash_discount" defaultValue={0} min={0} step="0.01" className="form-control" fdprocessedid="hltlp8" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Discount Type
                                                </label>
                                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="flash_discount_type" id="flash_discount_type" tabIndex={-98}>
                                                    <option value>Choose Discount Type</option>
                                                    <option value="amount">Flat</option>
                                                    <option value="percent">Percent</option>
                                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" data-id="flash_discount_type" title="Choose Discount Type" fdprocessedid="nwltk3"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Choose Discount Type</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-8" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Estimate Shipping Time</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Shipping Days
                                                </label>
                                                <div className="input-group">
                                                    <input type="number" className="form-control" name="est_shipping_days" min={1} step={1} placeholder="Shipping Days" fdprocessedid="y5axgb" />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupPrepend">Days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Vat &amp; TAX</h5>
                                        </div>
                                        <div className="card-body">
                                            <label htmlFor="name">
                                                Tax
                                                <input type="hidden" defaultValue={3} name="tax_id[]" />
                                            </label>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <input type="number" lang="en" min={0} defaultValue={0} step="0.01" placeholder="Tax" name="tax[]" className="form-control" required fdprocessedid="8sory3" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="tax_type[]" tabIndex={-98}>
                                                        <option value="amount">Flat</option>
                                                        <option value="percent">Percent</option>
                                                    </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox" aria-expanded="false" title="Flat" fdprocessedid="dban6w"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Flat</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-9" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-12">
                                    <div className="btn-toolbar float-right mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                        <div className="btn-group mr-2" role="group" aria-label="Third group">
                                            <button type="submit" name="button" value="unpublish" className="btn btn-primary action-btn" fdprocessedid="g0kx9r">Save &amp; Unpublish</button>
                                        </div>
                                        <div className="btn-group" role="group" aria-label="Second group">
                                            <button type="submit" name="button" value="publish" className="btn btn-success action-btn" fdprocessedid="spajja">Save &amp; Publish</button>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>




        </>
    )
}
export default AddNewProductsPage;