


import Receitas from "../../components/Receitas/Receitas"

export default function BoloDeCenura(){

    return(
    <div>

       <Receitas name="Brigadeiro" 
       img="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" 
       tempo="30 min"
       rendimento="15 Unidades"
       >
            <h2>Ingredientes</h2>
                
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <li>Ingrediente 3</li>
                <li>Ingrediente 4</li>
            </ul>

            <h2>Modo de preparo</h2>

            <ol>
                <li>Modo 1</li>
                <li>Modo 2</li>
                <li>Modo 3</li>
                <li>Modo 4</li>
            </ol>
       </Receitas>

    </div>

    )
}