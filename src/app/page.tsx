"use client";
import { useState } from "react";
import Input from "../components/Input";
import Users from "../components/Users";

export default function Home() {
    const [username, setUsername] = useState("sonersg");

    function getUsername(name: string) {
        setUsername(name);
    }

    return (
        <main className="flex min-h-fit max-w-4xl mx-auto flex-col items-center justify-start p-5">
            <h1>Home Page</h1>
            {username}
            <Input getUsername={getUsername} />
            <Users username={username} />
        </main>
    );
}
