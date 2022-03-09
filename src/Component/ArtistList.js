
const ArtistList = ({ artist, handleDelete }) => {
    return (
        <div className="artist-list">
            {artist.map((item) => (
                <div>
                    <img src={item.pictureUrl} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/logo512.png"
                    }} alt="pic" />

                    {/* <img src={item.pictureUrl} onError={(e) => (e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1629214283215-a7b6f0c91a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")} alt="pic" /> */}


                    {/* <img src={item.pictureUrl} alt="pic" /> */}
                    <p>{item.name}</p>
                    <p>{item.popularity.toFixed(2)}</p>
                    <button onClick={() => handleDelete(item.name)}>Delete</button>
                </div>

            ))}
        </div>

    )
}

export default ArtistList