
import styles from "./Contents.module.css"

interface ContentsProps {
    className?: string;
}

export default function Contents({ className }: ContentsProps) {

    return (
        <div className={className}>
            <aside className={styles.container}>
                <h1>Home</h1>
            </aside>

        </div>
    );
}