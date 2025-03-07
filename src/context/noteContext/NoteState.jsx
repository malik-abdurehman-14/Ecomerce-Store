import React from "react";
import NoteContext from "./NoteContext";

const NoteState = () => {

    const state={
        "name": "malik",
        "dep": "BS.SE"
    }

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;