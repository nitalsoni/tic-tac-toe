import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as icons from "react-bootstrap-icons";

export default function PlayerChoice(props: PlayerChoiceType) {
    const [selctedItem, setSelectedItem] = useState<string>("");

    const onSelection = (x: string) => {
        setSelectedItem(x);
        props.onClick(x);
    };

    return (
        <>
            <ButtonGroup>
                {props.choices.map((x) => {
                    return (
                        <Button
                            variant="secondary"
                            onClick={() => onSelection(x)}
                            className={x === selctedItem ? "btn-info" : ""}
                        >
                            <Icon
                                iconName={x}
                                color="royalblue"
                                size={48}
                                className="align-top"
                            />
                        </Button>
                    );
                })}
            </ButtonGroup>
        </>
    );
}

export type PlayerChoiceType = {
    choices: any[];
    onClick: (selected: string) => void;
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
