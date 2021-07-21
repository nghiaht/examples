import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link href="/fb1">
            <a>Facebook1 Example</a>
          </Link>
        </li>
        <li>
          <Link href="/fb2">
            <a>Facebook2 Example</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
