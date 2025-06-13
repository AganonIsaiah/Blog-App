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
    const headerElements = Array.from(document.querySelectorAll('h1, h2, h3'));

    const slugify = (text: string) =>
      text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    const seenIds = new Set<string>();

    const headersWithIds = headerElements.map((el) => {
      const rawText = el.textContent || '(no title)';
      let slug = slugify(rawText);

      // Ensure ID uniqueness
      let uniqueSlug = slug;
      let counter = 1;
      while (seenIds.has(uniqueSlug)) {
        uniqueSlug = `${slug}-${counter++}`;
      }
      seenIds.add(uniqueSlug);

      // Set the id attribute
      el.id = uniqueSlug;

      return {
        id: uniqueSlug,
        text: rawText,
        level: parseInt(el.tagName.replace('H', '')),
      };
    });

    setHeaders(headersWithIds);
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
