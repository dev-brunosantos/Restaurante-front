"use client"

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { CardContent } from "./CardContent";

interface CardProdutoProps {
    imagem: StaticImageData;
    altImagem: string;
    descricao: string;
}

export const CardProduto = ({ imagem, altImagem, descricao }: CardProdutoProps) => {

    const [favoritar, setFavoritar] = useState(false)

    function addAosFavoritos() {
        setFavoritar(!favoritar)

        if (favoritar === false) {
            alert("Adicionado aos favoritos")
        }
    }

    return (
        <div className="
          w-[250px] h-[370px] p-5 border-2 rounded-md flex-col items-center justify-evenly relative 
        ">

            <button className='absolute top-1 right-1' onClick={addAosFavoritos}>
                {
                    favoritar ? <FaHeart size={25} color='red' /> : <FaRegHeart size={25} color='red' />
                }
            </button>

            <div className='mb-4'>
                <Image
                    src={imagem}
                    alt={altImagem}
                />
            </div>

            <div className='w-full flex flex-col items-center justify-evenly gap-4'>
                <CardContent>
                    <p className='text-[14px] italic text-center'>
                        {descricao}
                    </p>
                </CardContent>

                <CardContent>
                    <button className='border p-2 rounded-sm text-[14px] cursor-pointer'>
                        Adicionar ao carrinho
                    </button>
                </CardContent>
            </div>
        </div>
    )
}