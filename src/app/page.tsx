// "use client"

import { CardProduto } from '../components/cards/CardProduto';
import Burger from '../../public/buger.jpg'


const burgers = [
  {
    imagem: Burger,
    altImagem: "Hambúrguer clássico com queijo e alface",
    descricao: "O hambúrguer clássico com carne de qualidade, queijo cheddar derretido, alface fresca e molho especial, perfeito para os amantes do tradicional."
  },
  {
    imagem: Burger,
    altImagem: "Hambúrguer com bacon e ovo frito",
    descricao: "Uma combinação irresistível de carne suculenta, bacon crocante e ovo frito, cobertos com queijo e molho barbecue. Uma explosão de sabores!"
  },
  {
    imagem: Burger,
    altImagem: "Hambúrguer vegano com abacate e molho picante",
    descricao: "Para os veganos, um hambúrguer delicioso de grãos e vegetais, servido com abacate fresco, molho picante e uma mistura de temperos que vai te surpreender."
  }
]

export default function Home() {
  return (
    <>
      <div>
        {burgers.map(infor => (
          <CardProduto
            key={infor.descricao}
            imagem={infor.imagem}
            altImagem={infor.altImagem}
            descricao={infor.descricao}
          />
        ))}
      </div>
    </>
  );
}
