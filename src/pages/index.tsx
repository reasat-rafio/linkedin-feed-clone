import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
   return (
      <div className="bg-gray-100">
         <Head>
            <title>Linked In</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <header className="w-full bg-white shadow-sm">
            <Navbar />
         </header>

         <main>
            <div className="m-10">asdasd</div>
         </main>

         <footer></footer>
      </div>
   );
}
