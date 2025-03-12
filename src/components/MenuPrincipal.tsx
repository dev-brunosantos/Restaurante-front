import Link from "next/link"

export const MenuPrincipal = () => {
    return(
        <header className="
          w-full max-w-[1500px] h-[65px] m-auto pl-10 pr-10 flex items-center justify-between
        ">
          <div className="h-full flex items-center justify-center">
            <a href="/">LOGO</a>
          </div>

          <nav className="w-[30%] h-full flex items-center justify-center border">
            <ul className="w-full h-full flex items-center justify-evenly">
              <Link href='/'>Icício</Link>
              <Link href='/pages/produtos'>Produtos</Link>
              <Link href='/pages/pedidos'>Pedidos</Link>
              <Link href=''>Contatos</Link>
            </ul>
          </nav>
        </header>
    )
}