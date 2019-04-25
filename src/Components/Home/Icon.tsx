import React from "react";

interface IIconProps {
    url: string;
    logo: string;
}

function Icon(props: IIconProps) {
    return (
        <a href={props.url}>
            <img src={props.logo} className="icon-bar-icon" alt="logo" />
        </a>
    );
}
export default Icon;
