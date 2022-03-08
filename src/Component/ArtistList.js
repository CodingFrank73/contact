
const ArtistList = ({ artist, handleDelete }) => {
    return (
        <div className="artist-list">
            {artist.map((item) => (
                <div>
                    <img src={item.pictureUrl} alt="pic" />
                    <p>{item.name}</p>
                    <p>{item.popularity.toFixed(2)}</p>
                    <button onClick={() => handleDelete(item.name)}>Delete</button>
                </div>

            ))}
        </div>

    )
}

export default ArtistList