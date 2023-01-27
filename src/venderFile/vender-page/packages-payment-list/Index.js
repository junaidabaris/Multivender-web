import PackagesList from "../../vender-components/packages-payment-list/PackagesList"

function PackagesListPage() {
    return <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Purchase Package List</h1>
                    </div>
                </div>
            </div>
            <PackagesList/>
        </div>
    </div>
}
export default PackagesListPage