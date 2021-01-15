import Head from "next/head";
import { MainBodyContainer } from "../components/MainBodyContainer/MainBodyContainer";

export default function Home() {
   return (
      <div className="bg-gray-100">
         <Head>
            <title>Linked In</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="pt-20 xl:w-3/4 m-auto p-3">
            <MainBodyContainer />
         </main>
      </div>
   );
}
