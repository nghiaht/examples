import Link from "next/link";
import { Facebook3 } from "../fb/Facebook3";

export default function Facebook2Page() {
  return (
    <div>
      <h1>Facebook3</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Facebook3 />
    </div>
  );
}
