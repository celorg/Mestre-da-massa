import NavbarAdm from "./NavbarAdm";

import './LayoutAdm.css';

export default function LayoutAdm({children}){

    return(
        <main>
            <NavbarAdm />
            <article className="containerAdm">
                {children}
            </article>
        </main>
    );
}