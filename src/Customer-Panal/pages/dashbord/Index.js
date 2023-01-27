import { Outlet } from "react-router-dom"
import Customer from "../../components/dashbord/Customer"

function DashbordCustomer() {
    return <>
        hello Customer
        <Customer />
        <Outlet></Outlet>
    </>
}
export default DashbordCustomer