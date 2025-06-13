import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Isaiah's Blog</h1>

            <div className={styles.right}>



                <div className={styles.link}>
                    <img
                        src="/versioncontrol.svg"
                        alt="Version Control Icon"
                        className={styles.icon}
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
                />


            </div>
        </header>

    );
}