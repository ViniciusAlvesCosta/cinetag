import Cabecalho from "components/cabecalho";
import Container from "components/Container";
import Rodape from "components/rodape";
import FavoritoProvider from "Contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho />
            <Container>
                <FavoritoProvider>
                        <Routes>
                            <Route path="/" element={<Inicio />}></Route>
                            <Route path="/favoritos" element={<Favoritos />}></Route>
                        </Routes>
                </FavoritoProvider>
                </Container>
            <Rodape />
        </BrowserRouter>
    )
}