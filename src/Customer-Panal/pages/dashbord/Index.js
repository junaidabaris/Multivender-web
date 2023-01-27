import { Outlet } from "react-router-dom"
import AsideBar from "../../components/dashbord/AsideBar"
import Customer from "../../components/dashbord/Customer"

function DashbordCustomer() {
    return <section className="py-5" style={{ backgroundColor: "#f2f3f8" }}>
        <div className="container">
            <div className="d-flex align-items-start">
                <AsideBar />

                <Outlet></Outlet>

            </div>
        </div>
    </section>
}
export default DashbordCustomer