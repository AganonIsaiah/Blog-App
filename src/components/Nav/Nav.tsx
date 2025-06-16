'use client'
import Link from "next/link";
import styles from "./Nav.module.css"
import { navSections, navFr } from "@/components/Nav/navLinks";
import { usePathname } from "next/navigation";

interface NavProps {
    className?: string;
}

export default function Nav({ className }: NavProps) {
    const pathname = usePathname();
    const isFr: boolean = pathname.slice(0,3) === "/fr";
    const navSects = isFr ? navFr : navSections;

    return (
        <div className={className}>
            <nav className={styles.nav}>
                {navSects.map((section) => (
                    <div key={section.heading} className={styles.section}>
                        <span className={styles.heading}>{section.heading}</span>

                        <ul className={styles.list}>
                            {section.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={`/${link.href}`} className={styles.link}>{link.sub}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                ))
                }
            </nav >
        </div>
    );
}