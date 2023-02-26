import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TotalContextProvider } from "../context/TotalContext";


import "./Layout.css"

export default function Layout ({children}){

    return(
        <TotalContextProvider>
            <main>
                <Navbar />
                <article className="container">
                    {children}
                </article>
                <Footer/>
            </main>
        </TotalContextProvider>
    )
}