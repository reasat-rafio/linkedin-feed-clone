import Head from "next/head";
import { MainBodyContainer } from "../components/MainBodyContainer/MainBodyContainer";

import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
   return (
      <div className="bg-gray-100">
         <Head>
            <title>Linked In</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="pt-28 lg:w-2/3 m-auto">
            <MainBodyContainer />
         </main>

         <footer></footer>
      </div>
   );
}
