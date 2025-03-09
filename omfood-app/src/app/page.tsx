import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-center">
      <h1 > Hello Welcome OmFood App</h1>
   <p> <Link href="/about"> 
      about Us
    </Link> </p>
    </div>
  );
}
