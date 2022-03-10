import React from "react";
import Footer from "./Footer";
import "./Player.scss";
import SidebarS from "./SidebarS";
import Body from "./Body";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <SidebarS />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    );
}

export default Player;