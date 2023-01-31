// import AsideBar from "../../../Customer-Panal/components/dashbord/AsideBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import AsideSeller from "../../../venderFile/vender-components/asideSeller/AsideSeller";
import TopNavSeller from "../../../venderFile/vender-components/same/TopNavSeller";
import AsideAdmin from "../../Components/asideAdim/AsideAdmin";

function DashboardRightSectionAdmin({ setshow }) {

    const [isActive, setIsActive] = useState("")
    const showSidebar = () => {
        setIsActive(!isActive)
    }
    const handleAsidebar = () => {
        setIsActive("")
    }
    useEffect(() => {
        setshow(false)
    }, [])


    return (
        <>
            <div className="aiz-main-wrapper">
                <AsideAdmin isActive={isActive} handleAsidebar={handleAsidebar} />
                <div className="aiz-content-wrapper">
                    <TopNavSeller showSidebar={showSidebar} />
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
export default DashboardRightSectionAdmin;