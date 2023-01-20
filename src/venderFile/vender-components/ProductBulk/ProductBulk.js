function ProductBulk() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Bulk Products Upload</h1>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{ fontSize: "14px", backgroundColor: "rgb(204, 229, 255)", borderColor: "rgb(184, 218, 255)" }}>
                        <tbody>



                            <tr>

                                <td className="footable-first-visible footable-last-visible" style={{ display: "table-cell" }}>1. Download the skeleton file and fill it with data.:</td></tr><tr>

                                <td className="footable-first-visible footable-last-visible" style={{ display: "table-cell" }}>2. You can download the example file to understand how the data must be filled.:</td></tr><tr>

                                <td className="footable-first-visible footable-last-visible" style={{ display: "table-cell" }}>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.:</td></tr><tr>

                                <td className="footable-first-visible footable-last-visible" style={{ display: "table-cell" }}>4. After uploading products you need to edit them and set products images and choices.</td></tr></tbody></table>
                    <a href="https://mmslfashions.in/public/download/product_bulk_demo.xlsx" download=""><button className="btn btn-primary mt-2">Download CSV</button></a>
                </div>
            </div>
            <div className="card"></div>
            <div className="card">
                <div className="card">
                    <div className="card-header">
                        <div className="col text-center text-md-left">
                            <h5 className="mb-md-0 h6">Upload CSV File</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal" action="https://mmslfashions.in/seller/product-bulk-upload/store" method="POST" encType="multipart/form-data">
                            <input type="hidden" name="_token" value="NmDkGjBEcNGrDlUpfklIRzgfuw8J9UrytOHvyg6l"/>                <div className="form-group row">
                                <label className="col-md-2 col-form-label">CSV</label>
                                <div className="col-sm-10">
                                    <div className="custom-file">
                                        <label className="custom-file-label">
                                            <input type="file" name="bulk_file" className="custom-file-input" required="" />
                                                <span className="custom-file-name">Choose File</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                                <div className="form-group mb-0 text-right">
                                    <button type="submit" className="btn btn-primary">Upload CSV</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
}
export default ProductBulk