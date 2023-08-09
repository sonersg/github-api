"use client";
import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

type UserContextType = {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
};

const ReposContex = createContext<UserContextType>({
    username: "sonersggggggggggggggggg",
    setUsername: (username: string) => {},
} as UserContextType);

type ReposProviderProps = {
    children: ReactNode;
};
export const ReposProvider = ({ children }: ReposProviderProps) => {
    const [username, setUsername] = useState("soner");

    useEffect(() => {
        const local = localStorage.getItem("reposContext") || "soner";
        setUsername(local);
    });

    // console.log("reposContext", username);

    const values = {
        username,
        setUsername,
    };

    return (
        <ReposContex.Provider value={values}>{children}</ReposContex.Provider>
    );
};
export default ReposContex;
