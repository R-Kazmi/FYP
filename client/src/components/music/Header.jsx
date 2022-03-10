import React from "react";
import "./Header.scss";
import { useStateValue } from "../../pages/music/StateProvider";
import { Avatar } from "@material-ui/core";
import { MdSearch} from "react-icons/md";

function Header({ spotify }) {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <MdSearch />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;