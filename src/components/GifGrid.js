import React, { useEffect, useState } from "react";

const GifGrid = ({ category }) => {
    const [gif, setGif] = useState([])
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=2p1Rn4jG3sRzuBZBZoqz3lKjlKnwpnfW&q=' + category + '&limit=3';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            })
        })

        setGif(gifs)


    }

    useEffect(() => {
        getGifs();
    }, [])


    return (
        <div >
            <h1>Resultados para: "{category}"</h1>
            <div className="grid-categories">
                {gif.map(e => {
                    return (
                        <div key={e.id} style={{display:"flex", justifyContent:"center",alignItems:"center", textAlign: "center" }}>
                            <h4>{e.title}</h4>
                            <img src={e.url} width="200px" alt={e.title} />

                        </div>
                    )
                })}

            </div>
            <hr />
        </div>
    )
}

export default GifGrid;