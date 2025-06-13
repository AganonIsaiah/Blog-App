'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Contents.module.css';

interface ContentsProps {
  className?: string;
}

interface HeaderItem {
  id: string;
  text: string;
  level: number;
}

export default function Contents({ className }: ContentsProps) {
  const [headers, setHeaders] = useState<HeaderItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const headerElements = Array.from(document.querySelectorAll('h1[id], h2[id], h3[id]'));
    const foundHeaders: HeaderItem[] = headerElements.map((el) => ({
      id: el.id,
      text: el.textContent || '(no title)',
      level: parseInt(el.tagName.replace('H', '')),
    }));

    setHeaders(foundHeaders);
  }, [pathname]);

  return (
    <div className={className}>
      <aside className={styles.container}>
        <span className={styles.heading}>Table of Contents</span>

        <ul className={styles.list}>
          {headers.map((h) => (
            <li key={h.id} className={styles[`level${h.level}`]}>
              <Link href={`#${h.id}`} className={styles.link}>
                {h.text}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
