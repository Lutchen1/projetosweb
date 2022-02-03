
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Receitas(aProps){

    return(

        <div>

            <Header tilte = {`TreinaCook - ${aProps.name}`}/>

            <main>
                <article className="receita-corpo">
                    <h1 className="receita-corpo-nome">{aProps.name}</h1>

                    <img className="receita-corpo-img" alt={aProps.name} src={aProps.img} />
                    
                    <div>
                        <i className="fas fa-stopwatch"></i>Preparo: {aProps.tempo} <br/>
                        <i className="fas fa-utensils"></i>Rendimento: {aProps.rendimento}
                    </div>

                    {aProps.children}        

                </article>

            </main>

            <Footer/>
        </div>
    )
}