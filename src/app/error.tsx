"use client";
import React from "react";

type ErrorProps = {
    error: Error;
    reset: () => void;
};
function Error({ error, reset }: ErrorProps) {
    return (
        <div className="h-96 flex flex-col justify-center">
            <h1>Error Page</h1>
            <h1>Something went wrong!</h1>
            <button
                onClick={reset}
                className="p-3 rounded-md hover:-translate-y-3 hover:scale-110"
            >
                Try Again
            </button>
        </div>
    );
}

export default Error;
