import Link from "next/link";
import { Facebook2 } from "../fb/Facebook2";

export default function Facebook2Page() {
  return (
    <div>
      <h1>Facebook2</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Facebook2 />
    </div>
  );
}
