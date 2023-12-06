import React from "react";
import { ButtonProps } from "@/utils/interfaces";

export function Button({className, backgroundColor, text}:ButtonProps) {

    const styles = {
        backgroundColor: backgroundColor,
    }

    return (
        <button className={className} type="button" style={styles}>
            {text}
        </button>
    )
}