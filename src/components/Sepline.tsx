import React from "react";

const BoxIcon = () => <svg className="box" xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
    <path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#C2D2F4" />
    <path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#B7C6E7" />
</svg>

const Line = () => <svg className="line" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1366 2" fill="none">
    <g opacity="0.5">
        <path d="M-37 0H1403V2H-37V0Z" fill="#C2D2F4" strokeWidth="2" />
        <path d="M-37 0H1403V2H-37V0Z" fill="#B7C6E7" strokeWidth="2" />
    </g>
</svg>

export function Sepline() {
    return <div className="sepline">
        
        <div className="box-container">
            <BoxIcon />
        </div>
        <Line />
    </div>
}

