import Link from "next/link";

import { Facebook1 } from "../fb/Facebook1";

// import dynamic from "next/dynamic";
// const Facebook1 = dynamic(
//   () => import("../fb/Facebook1").then((mod) => mod.Facebook1),
//   { ssr: false }
// );

export default function Facebook1Page() {
  return (
    <div>
      <h1>Facebook1</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Facebook1 />
    </div>
  );
}
