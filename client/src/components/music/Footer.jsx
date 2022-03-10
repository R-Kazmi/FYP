import React, { useEffect, useState } from "react";
import { useStateValue } from "../../pages/music/StateProvider";
import { MdPlayCircleOutline, MdSkipPrevious, MdSkipNext, MdShuffle, MdRepeat, MdVolumeDown, MdPauseCircleOutline, MdPlaylistPlay } from 'react-icons/md'

import "./Footer.scss";
import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useStateValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
        

            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
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
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
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
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                />
                {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>

            <div className="footer__center">
                <MdShuffle  size={25} className="footer__green" />
                <MdSkipPrevious size={25}  onClick={skipNext} className="footer__icon" />
                {playing ? (
                    <MdPauseCircleOutline
                        onClick={handlePlayPause}
                        size={50}
                        className="footer__icon"
                    />
                ) : (
                    <MdPlayCircleOutline
                        onClick={handlePlayPause}
                        size={50}
                        className="footer__icon"
                    />
                )}
                <MdSkipNext  size={25} onClick={skipPrevious} className="footer__icon" />
                <MdRepeat  size={25} className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <MdPlaylistPlay size={35}/>
                    </Grid>
                    <Grid item>
                        <MdVolumeDown size={35}/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;