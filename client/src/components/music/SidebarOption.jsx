import React from "react";
import "./SidebarOption.scss";

function SidebarOption({ option = "test", Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4 className="ml-1">{option}</h4> : <p>{option}</p>}
        </div>
    );
}

export default SidebarOption;