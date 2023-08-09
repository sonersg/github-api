"use client";
import ReposContex from "@/context/ReposContext";
import React, { useContext, useState } from "react";

type InputProps = {
    getUsername: (input: string) => void;
};
function Input({ getUsername }: InputProps) {
    const [input, setinput] = useState("");
    const data = useContext(ReposContex);

    function handlePress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault();

            if (input !== "") {
                getUsername(input);
                data.setUsername(input);
                localStorage.setItem("reposContext", input);
                setinput("");
                console.log("input", data.username);
            }
        }
    }

    return (
        <form className="text-center">
            <label>Please, enter a GitHub username.</label>
            <br />
            <input
                type="text"
                placeholder="Search..."
                className="text-center py-1 my-3 bg-transparent rounded-md border border-rose-400"
                onChange={e => setinput(e.target.value)}
                onKeyPress={handlePress}
                value={input}
            />
        </form>
    );
}

export default Input;
