"use client"

import { CardProduto } from '@/src/components/cards/CardProduto';
import Burger from '../../../../public/buger.jpg'

export default function Produtos() {

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
        },
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
        },
    ]

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1>Produtos</h1>

            <div className="
              w-[80%] h-[90%] flex items-center justify-evenly flex-wrap gap-4
            ">

                {burgers.map(infor => (
                    <CardProduto
                        key={infor.descricao}
                        imagem={infor.imagem}
                        altImagem={infor.altImagem}
                        descricao={infor.descricao}
                    />
                ))}

            </div>
        </div>
    )
}