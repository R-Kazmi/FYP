import React from "react";
import MainApp from "./MainApp";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";



const MainIndex = () => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <MainApp />
        </StateProvider>
    )
}
export default MainIndex;