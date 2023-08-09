import React from "react";

const layout = ({ children }) => {
    return (
        <div className="text-center">
            <h1>THIS IS THE ABOUT LAYOUT.</h1>
            {children}
        </div>
    );
};

export default layout;
