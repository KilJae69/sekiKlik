import Link from 'next/link';

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/blog/news">
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
