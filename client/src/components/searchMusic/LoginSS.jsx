import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=962b02b5d8114640a1fa3b247507484a&response_type=code&redirect_uri=http://localhost:3000/searchMusic&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function LoginSS() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}