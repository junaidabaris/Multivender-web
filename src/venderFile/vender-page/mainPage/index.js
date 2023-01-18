import { useEffect } from "react"

function MainVender({ setshow }) {

    useEffect(() => {
        setshow(false)
    }, []);

    return <>
        hello vender
    </>
}
export default MainVender