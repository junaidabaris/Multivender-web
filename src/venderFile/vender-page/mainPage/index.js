import { useEffect } from "react"

function MainVender({setshow}) {
    useEffect(() => {
        setshow(false)
    }, [])
    return <body className="side-menu-open">
        hello vender
    </body>
}
export default MainVender