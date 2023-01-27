import { createContext, useContext, useState } from "react";


export const FavoritoContext = createContext()
FavoritoContext.displayName = "favoritos"

export default function FavoritoProvider({ children }) {
    const [favorito, setFavoritos] = useState([])

    return (
        <FavoritoContext.Provider value={{favorito, setFavoritos}}>
            {children}
        </FavoritoContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavoritos } = useContext(FavoritoContext)

    function adicionarFavorito(novoFavorito) {
        const FavoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!FavoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavoritos(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}