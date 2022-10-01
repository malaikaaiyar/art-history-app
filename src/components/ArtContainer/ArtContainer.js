import { ArtModal } from "../ArtModal/ArtModal"
import "./ArtContainer.scss"

function ArtContainer({ data, currentYear }) {
    const filteredData = data.filter(piece => piece.metadata_creation_year === currentYear)

    console.log(currentYear)
    console.log("filtered", filteredData)

    const fixUrl = (url) => {
        return url.slice(0,7) + 'media' + url.slice(10, -6) + "_10.jpg"
    }
    
    return <>
        <div className="container">
            <div className="cards">
                {filteredData.map((piece) => {
                    return <ArtModal imgUrl={fixUrl(piece.data_thumbnail)} title={piece.data_title} artist={piece.artist_name} medium={piece.data_medium}/>
                })}   
                {filteredData.length === 0 && <p>No art for this year yet!</p>}
            </div>
        </div>
    </>
}

export { ArtContainer }