import React from "react";
import "./SidebarS.scss";
import SidebarOption from "./SidebarOption";

import { MdHome, MdSearch, MdLibraryMusic} from 'react-icons/md'

import { getTokenFromResponse } from "../../pages/music/spotify";
import { useStateValue } from "../../pages/music/StateProvider";

function SidebarS() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={props => <MdHome/>} option="Home" />
            <SidebarOption Icon={props => <MdSearch/>} option="Search" />
            <SidebarOption Icon={props => <MdLibraryMusic/>} option="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} />
            ))}
        </div>
    );
}

export default SidebarS;