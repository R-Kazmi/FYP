import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "../../components/music/Player";
import { getTokenFromResponse } from "./spotify";
import LoginS from "../../components/music/LoginS";

const s = new SpotifyWebApi();

function MainApp() {
    const [{ token }, dispatch] = useStateValue();

    useEffect(() => {
        // Set token
        const hash = getTokenFromResponse();
        window.location.hash = "";
        let _token = hash.access_token;

    

        if (_token) {
            s.setAccessToken(_token);

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            );

            s.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: s,
            });

            s.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user,
                });
            });

            s.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists,
                });
            });
        }
    }, [token, dispatch]);

    return (
        <div className="app">
            {!token && <LoginS />}
            {token && <Player spotify={s} />}
        </div>
    );
}

export default MainApp;