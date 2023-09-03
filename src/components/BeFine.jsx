import styles from './BeFine.module.css'
import Checkbox from '@mui/material/Checkbox';

export function BeFine({author, content}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                    </div>
                </div>
            </header>

            <div className={styles.content}>
                <Checkbox checked={true} disabled={true} color='success'/>
                <div className={styles.contentP}>
                {content.map(line => {
                    return <p key={line.content}>{line.content}</p>;
                })}
                </div>
            </div>
        </article>
    );
}