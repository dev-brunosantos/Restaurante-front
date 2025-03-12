import { ReactNode } from "react"

export const CardContent = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full flex items-center justify-center'>
            {children}
        </div>
    )
}