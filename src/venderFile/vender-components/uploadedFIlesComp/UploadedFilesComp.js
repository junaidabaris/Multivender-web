function UploadedFilesComp() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All uploaded files</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <a href="https://mmslfashions.in/seller/uploads/create" className="btn btn-primary">
                                    <span>Upload New File</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <form id="sort_uploads" action="">
                            <div className="card-header row gutters-5">
                                <div className="col">
                                    <h5 className="mb-0 h6">All files</h5>
                                </div>
                                <div className="dropdown mb-2 mb-md-0">
                                    <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="nw0v3r">
                                        Bulk Action
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#" onclick="bulk_delete()"> Delete selection</a>
                                    </div>
                                </div>
                                <div className="col-md-3 ml-auto mr-0">
                                    <div className="dropdown bootstrap-select form-control form-control-xs aiz-"><select className="form-control form-control-xs aiz-selectpicker" name="sort" onchange="sort_uploads()" tabIndex="-98">
                                        <option value="newest">Sort by newest</option>
                                        <option value="oldest">Sort by oldest</option>
                                        <option value="smallest">Sort by smallest</option>
                                        <option value="largest">Sort by largest</option>
                                    </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Sort by newest" fdprocessedid="9uazn"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Sort by newest</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control form-control-xs" name="search" placeholder="Search your files" value="" fdprocessedid="p00zan" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary" fdprocessedid="ln575">Search</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="aiz-checkbox-inline">
                                        <label className="aiz-checkbox">
                                            Select All
                                            <input type="checkbox" className="check-all" />
                                            <span className="aiz-square-check"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row gutters-5">
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="167">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png" target="_blank" download="Screenshot 2022-12-15 at 8.19.31 PM.png" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/167" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="167" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="Screenshot 2022-12-15 at 8.19.31 PM.png">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/PKbKwT2SXjyDLMuMc5By1bjKs866MFEPt1ZX8m0p.png" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">Screenshot 2022-12-15 at 8.19.31 PM</span>
                                                        <span className="ext">.png</span>
                                                    </h6>
                                                    <p>134.41 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="26">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/U0NShOuPvomzR4GGzDAu4mInExc9xG0YWoxHEfp6.png" target="_blank" download="Seller-Website-BannerAbarisProducts.png" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/U0NShOuPvomzR4GGzDAu4mInExc9xG0YWoxHEfp6.png">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/26" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="26" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="Seller-Website-BannerAbarisProducts.png">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/U0NShOuPvomzR4GGzDAu4mInExc9xG0YWoxHEfp6.png" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">Seller-Website-BannerAbarisProducts</span>
                                                        <span className="ext">.png</span>
                                                    </h6>
                                                    <p>318.36 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="19">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png" target="_blank" download="cate3.png" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/19" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="19" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="cate3.png">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">cate3</span>
                                                        <span className="ext">.png</span>
                                                    </h6>
                                                    <p>101.87 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="18">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/O3WjcsUDcRRh1cZ6yAWP7PEtpUiZDX1DaHMgtkkX.png" target="_blank" download="favicon-32x32.png" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/O3WjcsUDcRRh1cZ6yAWP7PEtpUiZDX1DaHMgtkkX.png">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/18" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="18" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="favicon-32x32.png">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/O3WjcsUDcRRh1cZ6yAWP7PEtpUiZDX1DaHMgtkkX.png" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">favicon-32x32</span>
                                                        <span className="ext">.png</span>
                                                    </h6>
                                                    <p>1.79 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="17">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" target="_blank" download="EIHL_Kynoch01.jpg" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/17" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="17" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="EIHL_Kynoch01.jpg">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">EIHL_Kynoch01</span>
                                                        <span className="ext">.jpg</span>
                                                    </h6>
                                                    <p>54.71 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="16">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" target="_blank" download="cc3.jpg" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/16" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="16" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="cc3.jpg">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">cc3</span>
                                                        <span className="ext">.jpg</span>
                                                    </h6>
                                                    <p>49.41 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto w-140px w-lg-220px">
                                        <div className="aiz-file-box">
                                            <div className="dropdown-file">
                                                <a className="dropdown-link" data-toggle="dropdown">
                                                    <i className="la la-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="detailsInfo(this)" data-id="3">
                                                        <i className="las la-info-circle mr-2"></i>
                                                        <span>Details Info</span>
                                                    </a>
                                                    <a href="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png" target="_blank" download="zambian-logo.png" className="dropdown-item">
                                                        <i className="la la-download mr-2"></i>
                                                        <span>Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item" onclick="copyUrl(this)" data-url="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png">
                                                        <i className="las la-clipboard mr-2"></i>
                                                        <span>Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" className="dropdown-item confirm-alert" data-href="https://mmslfashions.in/seller/uploads/destroy/3" data-target="#delete-modal">
                                                        <i className="las la-trash mr-2"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="select-box">
                                                <div className="aiz-checkbox-inline">
                                                    <label className="aiz-checkbox">
                                                        <input type="checkbox" className="check-one" name="id[]" value="3" />
                                                        <span className="aiz-square-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="card card-file aiz-uploader-select c-default" title="zambian-logo.png">
                                                <div className="card-file-thumb">
                                                    <img src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png" className="img-fit" />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="d-flex">
                                                        <span className="text-truncate title">zambian-logo</span>
                                                        <span className="ext">.png</span>
                                                    </h6>
                                                    <p>6.39 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aiz-pagination mt-3">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto border-sm-top">
                    <p className="mb-0">©  v6.3.3</p>
                </div>
            </div>
        </>
    )
}
export default UploadedFilesComp;