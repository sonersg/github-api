"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaEye, FaIdBadge } from "react-icons/fa";
// import repos from "@/githubAPI/repos.json";
import ReposContex from "@/context/ReposContext";
import { ReposType } from "@/types/repos";

function Repos() {
    const [repos, setRepos] = useState<ReposType>();
    const data = useContext(ReposContex);

    useEffect(() => {
        async function fetchRepos(username: string) {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`
            );
            const data = await response.json();
            setRepos(data);
        }
        fetchRepos(localStorage.getItem("reposContext") || data.username);
        console.log("useEffect");
        console.log("repos Component", data.username);
        console.log(`https://api.github.com/users/${data.username}/repos`);
    }, []);
    // const repos = await fetchRepos(username);

    if (!repos) return <h1 className="text-center">No Repos</h1>;

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-center text-4xl hover:scale-110 hover:text-rose-500 hover:-translate-y-2 transition-all ease-in-out duration-300">
                {data.username}
            </h1>
            <ul>
                {repos.map(repo => (
                    <li
                        className="bg-slate-500 hover:bg-slate-800 p-2 my-3 rounded-xl"
                        key={repo.id}
                    >
                        <h2 className="text-center">{repo.name}</h2>
                        <p>{repo.description}</p>
                        <div className="bg-slate-600 flex justify-between ">
                            <span className="flex items-center">
                                <FaStar className="mx-3" />
                                {repo.stargazers_count}
                            </span>
                            <span className="flex items-center">
                                <FaCodeBranch className="mx-3" />
                                {repo.forks_count}
                            </span>
                            <span className="flex items-center">
                                <FaEye className="mx-3" />
                                {repo.watchers_count}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Repos;
