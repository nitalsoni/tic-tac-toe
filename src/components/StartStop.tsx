import React, { useState } from "react";

export enum GameAction {
    Start = "PLAY",
    Stop = "END GAME",
}

type StartStopType = {
    onClick: (action: GameAction) => void;
};

function StartStop(props: StartStopType) {
    const [label, setLabel] = useState("Play");

    const handleClick = () => {
        setLabel((l) =>
            l.toUpperCase() === GameAction.Start
                ? GameAction.Stop
                : GameAction.Start
        );
        props.onClick(label as GameAction);
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handleClick}
            style={{ width: "110px" }}
        >
            {label}
        </button>
    );
}

export default StartStop;
