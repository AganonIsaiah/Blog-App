
import Link from "next/link";
import styles from "./Nav.module.css"
import { navSections } from "@/data/navLinks";

interface NavProps {
    className?: string;
}

export default function Nav({ className }: NavProps) {

    return (
        <div className={className}>
            <nav className={styles.nav}>
                {navSections.map((section) => (
                    <div key={section.heading} className={styles.section}>
                        <span className={styles.heading}>{section.heading}</span>

                        <ul className={styles.list}>
                            {section.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>{link.sub}</Link>
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