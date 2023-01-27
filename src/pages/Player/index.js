import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'

export default function Player() {
    const [video, setVideo] = useState()
    const paremetros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ViniciusAlvesCosta/cinetag-api/videos?id=${paremetros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, []) 
    
    if(!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%"
                src={video.link}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </section>
        </>
    )
}