/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomArrow = ({ onClick, side }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <svg
            className="absolute top-1/2 transform -translate-y-1/2 text-white rounded-full p-2"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{
                [side]: '-70px', // Position the arrow on the left or right
                zIndex: 2,
                cursor: 'pointer', // Ensure the cursor changes to a pointer
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <circle cx="20" cy="20" r="20" fill={isHovered ? "#156BCA" : "#D4E9FF"} />
            <path
                d={side === 'left' ? "M22 26L16 20L22 14" : "M18 26L24 20L18 14"}
                stroke={isHovered ? "white" : "#152A16"}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CustomArrow