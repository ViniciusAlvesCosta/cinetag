import Cabecalho from "components/cabecalho";
import Container from "components/Container";
import Rodape from "components/rodape";
import FavoritoProvider from "Contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Rodape />
        </main>
    )
}