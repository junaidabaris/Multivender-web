
function TableRows({ chengeStatus, state ,chengeStatusProduct ,value  , showModle}) {

    return <tr onClick={showModle}>
        <td className="footable-first-visible" style={{ display: "table-cell" }}>1</td>
        <td style={{ display: "table-cell" }}>
           <img src="http://localhost:3000/static/media/fert2.e675a2214b5df27be933.avif" style={{width:"100px"}}/>
        </td>
        <td style={{ display: "table-cell" }}>
            <a href="#" target="_blank" className="text-reset">Ammonium Sulphate</a>
        </td>
        <td style={{ display: "table-cell" }}>
            Straight Fertilizer
        </td>
        <td style={{ display: "table-cell" }}>
            99
        </td>
        <td style={{ display: "table-cell" }}>220</td>
        <td style={{ display: "table-cell" }}>
            <span className="badge badge-inline badge-success">Approved</span>
        </td>
        <td style={{ display: "table-cell" }}>
            <label className="aiz-switch aiz-switch-success mb-0">
                <input onChange={chengeStatusProduct} value="75" type="checkbox" checked={value} />
                <span className="slider round"></span>
            </label>
        </td>
        <td style={{ display: "table-cell" }}>
            <label className="aiz-switch aiz-switch-success mb-0">
                <input onChange={chengeStatus} value="75" type="checkbox" checked={state} />
                <span className="slider round"></span>
            </label>
        </td>
        <td className="text-right footable-last-visible" style={{ display: "table-cell" }}>
            <a className="btn btn-soft-info btn-icon btn-circle btn-sm" href="https://mmslfashions.in/seller/product/75/edit?lang=en" title="Edit">
                <i className="las la-edit"></i>
            </a>
            <a href="https://mmslfashions.in/seller/products/duplicate/75" className="btn btn-soft-success btn-icon btn-circle btn-sm" title="Duplicate">
                <i className="las la-copy"></i>
            </a>
            <a href="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete" data-href="https://mmslfashions.in/seller/products/destroy/75" title="Delete">
                <i className="las la-trash"></i>
            </a>
        </td>
    </tr>
}
export default TableRows