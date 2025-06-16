'use client';
import React, { useState } from "react";
import styles from "./Header.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        router.replace("/")
        if (e.key === "Enter") {
            const trimmedQuery = query.trim().toLowerCase();
            if (trimmedQuery) {

                await router.push(trimmedQuery);
                setQuery("");
            }
        }
    };


    return (
        <header className={styles.header}>
            <span className={styles.title}>Isaiah&apos;s Blog</span>

            <div className={styles.right}>

                <div className={styles.link}>
                    <Image
                        src="/versioncontrol.svg"
                        alt="Version Control Icon"
                        className={styles.icon}
                        width={24}
                        height={24}
                    />
                    <a
                        href="https://github.com/AganonIsaiah/Blog-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.github}
                    >AganonIsaiah/Blog-App</a>
                </div>


                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.search}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />


            </div>
        </header>

    );
}