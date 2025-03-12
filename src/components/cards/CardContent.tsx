import { ReactNode } from "react"

interface CardContentProps {
    isDescription: boolean;
    descricao?: string;
}

export const CardContent = ({ isDescription, descricao }: CardContentProps) => {
    return (
        <div className='w-full flex items-center justify-center'>

            {isDescription ? (
                <p className='text-[14px] italic text-center'>
                    {descricao}
                </p>
            ) : (
                <button className='border p-2 rounded-sm text-[14px] cursor-pointer'>
                    Adicionar ao carrinho
                </button>
            )
            }
        </div>
    )
}