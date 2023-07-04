import React, { useState, useContext } from "react";
import { GameStatusContext } from "../contexts/GameContextProvider";
import { GameProgress } from "../helper";
import { XOIconChoice } from "./Game";
import { Icon } from "./PlayerChoice";

type SquareType = {
    row: number;
    column: number;
    value: string | null;
    iconChoice: XOIconChoice[];
    onNextElement: () => string;
    onSelection: (row: number, column: number, value: string) => void;
};

export default function Square(props: SquareType) {
    const [element, setElement] = useState<any>(props.value!);
    const { gameStatus } = useContext(GameStatusContext);

    const onSelection = () => {
        if (!element) {
            let xo = props.onNextElement();
            setElement(xo);
            props.onSelection(props.row, props.column, xo);
            console.log(props.iconChoice[0]);
        }
    };

    const getIconName = (xo: string): any => {
        return xo === "X"
            ? props.iconChoice[0].IconName
            : xo === "0"
            ? props.iconChoice[1].IconName
            : null;
    };

    return (
        <>
            {
                <button
                    className="square"
                    onClick={onSelection}
                    style={{ verticalAlign: "center" }}
                    disabled={gameStatus.state !== GameProgress.InPlay}
                >
                    {getIconName(element) && (
                        <Icon
                            iconName={getIconName(element)}
                            color={element === "X" ? "RoyalBlue" : "#e6258f"}
                            size={40}
                            className="align-top"
                        />
                    )}
                </button>
            }
        </>
    );
}
