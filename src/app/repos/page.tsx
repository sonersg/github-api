import React from "react";
import Repos from "@/components/Repos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Repos",
};

function page() {
    return (
        <>
            <Repos />
        </>
    );
}

export default page;
