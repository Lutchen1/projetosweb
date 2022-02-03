

import Head from "next/head"
import Link from "next/link"


export default function Header(aProps){
    return(

        <header className="header">
            <Head>
                <title>{aProps.title}</title>
                <link rel="stylesheet" href = "/styles/page.css"/>
            </Head>
            
            <Link href="/">
                <a>
                <img alt="logotreinacook" src="/vercel.svg" />
                </a>
            </Link>        
        </header>


    )

}