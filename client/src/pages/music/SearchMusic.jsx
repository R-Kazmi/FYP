import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import LoginSS from "../../components/searchMusic/LoginSS"
import Dashboard from "../../components/searchMusic/Dashboard"

const code = new URLSearchParams(window.location.search).get("code")

function SearchMusic() {

    return code ? <Dashboard code={code} /> : <LoginSS />

}

export default SearchMusic