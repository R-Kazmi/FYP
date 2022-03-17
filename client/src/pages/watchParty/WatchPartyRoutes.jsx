import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./WatchPartyHome";
import Room from "./Room";
import NotFound from "../../components/watchParty/NotFound";
import history from "../../utils/history";


export default function WatchPartyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/@:roomid" element={<Room/>} />
        <Route component={NotFound} />
      </Routes>
    </>
  );
}
