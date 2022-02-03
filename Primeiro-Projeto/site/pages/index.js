
import Head from "next/head"
import Link from "next/link"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Cards from "../components/Cards/Cards"

export default function index(){
  return(
    <div>
      
      <Header title="trenacook - receitas"/>

      <Cards link="/bolos/bolo-de-cenoura" 
      linkimg="https://www.acasaencantada.com.br/wp-content/uploads/2021/05/casaencantada_capablog_bolo-de-cenoura.png.webp"   
      categ="Bolos" 
      recei="Bolo de Cenoura" />
            
      <Cards link="/doces/brigadeiro" 
      linkimg="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg" 
      categ="Doces" 
      recei="Brigadeiro" />

      <Footer/>

    </div>
  )
}