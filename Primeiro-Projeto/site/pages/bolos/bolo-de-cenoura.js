


import Receitas from "../../components/Receitas/Receitas"

export default function BoloDeCenura(){

    return(
    <div>

       <Receitas name="Bolo de Cenoura" 
       img="https://www.acasaencantada.com.br/wp-content/uploads/2021/05/casaencantada_capablog_bolo-de-cenoura.png.webp" 
       tempo="30 min"
       rendimento="15 pedacos"
       >
            <h2>Ingredientes</h2>

            <h3>Massa</h3>
                
            <ul>
                <li>Ingrediente 1</li>
                <li>Ingrediente 2</li>
                <li>Ingrediente 3</li>
                <li>Ingrediente 4</li>
            </ul>

            <h3>Cobertura</h3>
                
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