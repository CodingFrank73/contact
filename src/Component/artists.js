
import React, { useState, useEffect } from 'react';
import ArtistList from "./ArtistList";

const Artist = () => {
    const [artist, setArtist] = useState(null);
    const [numberOfArtists, setNumberOfArtists] = useState(0)
    const [aToz, setaToz] = useState(true);

    const handleDelete = (name) => {
        const delArtist = artist.filter(del => del.name !== name);
        console.log(delArtist);
        setArtist(delArtist);
    }

    useEffect(() => {
        fetch('http://localhost:8000/artist')
            .then(response => response.json())
            .then(data => {
                setArtist(data.slice(0, 5))
                setNumberOfArtists(data.length)
            })
        console.log(artist);
    }, []);

    function add() {
        let random = Math.floor(Math.random() * numberOfArtists)

        fetch('http://localhost:8000/artist')
            .then(response => response.json())
            .then(data => {
                setArtist(artist => [...artist, data[random]])
            })
    }

    function sort() {
        let s;
        if (aToz === true) {
            s = artist.sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            setaToz(false);
        } else {
            s = artist.sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            })
            setaToz(true)
        }
        console.log(s);

        setArtist(s);
    }

    return (
        <div className="artists">
            <button onClick={add}>Add Random Contact</button>
            <button onClick={sort}>Sort by Name</button>
            {artist && <ArtistList artist={artist} handleDelete={handleDelete} />}
        </div>
    )

}

export default Artist