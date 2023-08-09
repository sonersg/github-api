import React from "react";
export const metadata = {
    title: "About Page",
};

const AboutPage = () => {
    return (
        <div className="text-center bg-slate-700 hover:bg-slate-800 p-16">
            About Page
            <p>
                You can search the usernames to check GitHub profiles and repos.
            </p>
            <small>Mon, 07 of August, 2023</small>
        </div>
    );
};

export default AboutPage;
