import { Layout } from "../components/Layout/Layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { GlobalProvider } from "../store/GlobalStore";

function MyApp({ Component, pageProps }) {
   return (
      <GlobalProvider>
         <AnimatePresence exitBeforeEnter>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </AnimatePresence>
      </GlobalProvider>
   );
}

export default MyApp;
