import { Footer } from "@components/app/Footer";
import type { AppProps } from "next/app";
export default ({ Component, pageProps }:AppProps) => {
    return<>
          <div className="d-flex flex-column min-vh-100 justify-content-between">
     <Component {...pageProps} />    </div>
     <Footer/>
     </>
}