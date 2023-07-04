import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import * as icons from "react-bootstrap-icons";

export default function PlayerChoice(props: PlayerChoiceType) {
    const [selctedItem, setSelectedItem] = useState<string>("");

    const onSelection = (x: string) => {
        setSelectedItem(x);
        props.onClick(x);
    };

    useEffect(() => {
        onSelection(props.defaultIcon);
    }, [props.defaultIcon]);

    return (
        <div
            style={{
                borderBlockColor: "blue",
                borderWidth: "2px",
                borderStyle: "solid",
                margin: "2px",
            }}
        >
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {props.choices.map((x) => {
                    return (
                        <Button
                            variant="default"
                            onClick={() => onSelection(x)}
                            className={x === selctedItem ? "btn-warning" : ""}
                        >
                            <Icon
                                iconName={x}
                                color={props.bgColor}
                                size={48}
                                className="align-top"
                            />
                        </Button>
                    );
                })}
            </div>
            <div
                className="row d-flex aligns-items-center justify-content-center"
                style={{
                    borderBlockColor: "blue",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    margin: "0px",
                }}
            >
                <h1 style={{ color: "grey" }}>{props.playerName}</h1>
            </div>
        </div>
    );
}

export type PlayerChoiceType = {
    choices: any[];
    onClick: (selected: string) => void;
    bgColor: string;
    playerName: string;
    defaultIcon: string;
};

export interface IconProps extends icons.IconProps {
    // Cannot use "name" as it is a valid SVG attribute
    // "iconName", "filename", "icon" will do it instead
    iconName: keyof typeof icons;
}
export const Icon = ({ iconName, ...props }: IconProps) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
};
