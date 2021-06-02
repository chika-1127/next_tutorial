import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image src="/images/profile.png" height={455} width={690} alt="Pikachu" />
    </>
  );
}
