import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import AsideSeller from "../../vender-components/asideSeller/AsideSeller"
import TopNavSeller from "../../vender-components/same/TopNavSeller"

function MainVender({ setshow }) {

    useEffect(() => {
        setshow(false)
    }, [])
    return <>
        <div className="aiz-main-wrapper">
            <AsideSeller/>
            <div className="aiz-content-wrapper">
                <TopNavSeller/>
                <Outlet></Outlet>
            </div>
        </div>
    </>
}
export default MainVender