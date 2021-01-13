import Head from "next/head";

import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
   return (
      <div className="bg-gray-100">
         <Head>
            <title>Linked In</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="pt-30 lg:w-3/5 m-auto"></main>

         <footer></footer>
      </div>
   );
}
