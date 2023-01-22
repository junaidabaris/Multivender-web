function ShopSettingComp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Shop Settings
                                    <a href="https://mmslfashions.in/shop/Abaris-Products-1" className="btn btn-link btn-sm" target="_blank">
                                        (Visit Shop)
                                        <i className="la la-external-link"></i>
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Basic Info</h5>
                        </div>
                        <div className="card-body">
                            <form className="" action="https://mmslfashions.in/seller/shop/update" method="POST" enctype="multipart/form-data">
                                <input type="hidden" name="shop_id" value="1" />
                                <input type="hidden" name="_token" value="vYa7wvtgtWw8w6ek75H5eBE4tCKL7oJ6rsP533DB" />
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Shop Name<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Shop Name" name="name" value="Abaris Products" required="" fdprocessedid="h5id2" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-2 col-form-label">Shop Logo</label>
                                    <div className="col-md-10">
                                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                            </div>
                                            <div className="form-control file-amount">1 File selected</div>
                                            <input type="hidden" name="logo" value="3" className="selected-files" />
                                        </div>
                                        <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id="3" title="zambian-logo.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">zambian-logo</span><span className="ext flex-shrink-0">.png</span></h6><p>6 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="cv57m"><i className="la la-close"></i></button></div></div></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">
                                        Shop Phone
                                    </label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Phone" name="phone" value="+918851746286" required="" fdprocessedid="8py102" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Shop Address <span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Address" name="address" value="G-44, 2nd Floor, Shaheen Bagh, New Delhi-110025, INDIA" required="" fdprocessedid="k337t" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Meta Title<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Meta Title" name="meta_title" value="Abaris Products" required="" fdprocessedid="cowznw" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Meta description<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <textarea name="meta_description" rows="3" className="form-control mb-3" required="">Abaris Products</textarea>
                                    </div>
                                </div>
                                <div className="form-group mb-0 text-right">
                                    <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="hccjus">Save</button>
                                </div>
                                {/* </div> */}
                            </form>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">Banner Settings</h5>
                            </div>
                            <div className="card-body">
                                <form className="" action="https://mmslfashions.in/seller/shop/update" method="POST" enctype="multipart/form-data">
                                    <input type="hidden" name="shop_id" value="1" />
                                    <input type="hidden" name="_token" value="vYa7wvtgtWw8w6ek75H5eBE4tCKL7oJ6rsP533DB" />
                                    <div className="row mb-3">
                                        <label className="col-md-2 col-form-label">Banners (1500x450)</label>
                                        <div className="col-md-10">
                                            <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="true">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                </div>
                                                <div className="form-control file-amount">1 File selected</div>
                                                <input type="hidden" name="sliders" value="26" className="selected-files" />
                                            </div>
                                            <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id="26" title="Seller-Website-BannerAbarisProducts.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="https://mmslfashions.in/public/uploads/all/U0NShOuPvomzR4GGzDAu4mInExc9xG0YWoxHEfp6.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">Seller-Website-BannerAbarisProducts</span><span className="ext flex-shrink-0">.png</span></h6><p>318 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button" fdprocessedid="g3fe0e"><i className="la la-close"></i></button></div></div></div>
                                            <small className="text-muted">We had to limit height to maintian consistancy. In some device both side of the banner might be cropped for height limitation.</small>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="3uv42d">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">Social Media Link</h5>
                            </div>
                            <div className="card-body">
                                <form className="" action="https://mmslfashions.in/seller/shop/update" method="POST" enctype="multipart/form-data">
                                    <input type="hidden" name="shop_id" value="1" />
                                    <input type="hidden" name="_token" value="vYa7wvtgtWw8w6ek75H5eBE4tCKL7oJ6rsP533DB" />                <div className="form-box-content p-3">
                                        <div className="row mb-3">
                                            <label className="col-md-2 col-form-label">Facebook</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="Facebook" name="facebook" value="www.facebook.com" fdprocessedid="ec3fdl" />
                                                <small className="text-muted">Insert link with https</small>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-2 col-form-label">Instagram</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="Instagram" name="instagram" value="" fdprocessedid="iwgxu" />
                                                <small className="text-muted">Insert link with https</small>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-2 col-form-label">Twitter</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="Twitter" name="twitter" value="www.twitter.com" fdprocessedid="9mj6ac" />
                                                <small className="text-muted">Insert link with https</small>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-2 col-form-label">Google</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="Google" name="google" value="www.google.com" fdprocessedid="0zjmse" />
                                                <small className="text-muted">Insert link with https</small>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-2 col-form-label">Youtube</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="Youtube" name="youtube" value="www.youtube.com" fdprocessedid="jxx8s" />
                                                <small className="text-muted">Insert link with https</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-sm btn-primary" fdprocessedid="ug2fa2l">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
                        <p className="mb-0">©  v6.3.3</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopSettingComp;