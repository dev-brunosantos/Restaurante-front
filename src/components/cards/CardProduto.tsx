import Image from "next/image";
import { ReactNode } from "react";

interface CardProdutoProps {
    imagem: string;
    altImagem: string;
    descricao: string;
    children: ReactNode;
}

export const CardProduto = ({ imagem, altImagem, descricao, children }: CardProdutoProps) => {
    return (
        <div>
            <div>
                {/* AQUI FICARÁ A IMAGEM */}
                <Image
                    src={imagem}
                    alt={altImagem}
                />
            </div>

            <div>
                <p>
                    {descricao}
                </p>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <button>
                        {children}
                    </button>
                </div>
            </div>
        </div>
    )
}