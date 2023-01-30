import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import AsideSeller from "../../vender-components/asideSeller/AsideSeller"
import TopNavSeller from "../../vender-components/same/TopNavSeller"

function MainVender({ setshow }) {

    const [isActive, setIsActive] = useState("")
    const showSidebar = () =>{
        setIsActive(!isActive)
    }
    const handleAsidebar = () => {
        setIsActive("")
    }
    useEffect(() => {
        setshow(false)
    }, [])
    return <>
        <div className="aiz-main-wrapper">
            <AsideSeller isActive={isActive} handleAsidebar={handleAsidebar} />
            <div className="aiz-content-wrapper">
                <TopNavSeller showSidebar={showSidebar}/>
                <Outlet></Outlet>
            </div>
        </div>
    </>
}
export default MainVender