
const ArtistItem = (props) => {
    return (
        <li>
            <img src={props.pictureUrl} alt="pic" />
            <p>{props.name}</p>
            <p>{props.popularity}</p>
        </li>
    )
}

export default ArtistItem