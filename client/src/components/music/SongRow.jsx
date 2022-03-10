import React from "react";
import "./SongRow.scss";

function SongRow({ track, playSong }) {
    return (
        <div className="songRow" onClick={() => playSong(track.id)}>
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist, id) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongRow;