import React from "react";
import "./Body.scss";
import Header from "./Header";
import { useStateValue } from "../../pages/music/StateProvider";
import SongRow from "./SongRow";
import { MdPlayCircleFilled, MdFavorite, MdMoreHoriz } from "react-icons/md";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <MdPlayCircleFilled
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <MdFavorite fontSize="large" />
                    <MdMoreHoriz />
                </div>

                {discover_weekly?.tracks.items.map((item, index) => (
                    <SongRow playSong={playSong} track={item.track} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Body;