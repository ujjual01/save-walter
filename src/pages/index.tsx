import Navbar from "@components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid md:grid-cols-2 p-5 lg:px-24">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold"> SAVE Mr. White</span>
        </h1>
          <p className="textBlock-subtitle">My dad is amazing. Recently I find out he is going to die. I need to help to keep my dad and the series alive</p>
           <button className="w-32 p-4 lg:w-48 tracking-wider uppercase   bg-yellow hover:bg-yellow-400 focus:outline-none text-black font-medium ">Donate</button>
      </div>
      <div>
        <Image src="/assets/walter.png" height={640} width={670} objectFit="contain"/>
      </div>
    </div>
  );
}
