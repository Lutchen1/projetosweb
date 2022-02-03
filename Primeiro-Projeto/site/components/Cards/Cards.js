

import Link from "next/link"

export default function Cards(aProps){

    return(

        <main>
        <figure className="receita-cartao">        
           <Link href={aProps.link}>
             <a>
             <img className="receita-imagem" alt="brigadeiro" src={aProps.linkimg} />
             </a>
           </Link>  
           <div className="receita-categoria">{aProps.categ}</div>
           <figcaption className="receita-nome">{aProps.recei}</figcaption>
        </figure>        
       </main>

    )
}