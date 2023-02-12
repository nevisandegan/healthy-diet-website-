import {gallery} from "../content/contents"
const Gallery=()=>
{
return(
    <>
        <div className="gallery">
        {gallery.map((a,index)=>
        (
            <figure className="gallery-item" key={index}>
                <img src={require(`../img/gallery/${a}`)} alt="gallery"/>
            </figure>
        ))}
            
        </div>
    </>
)
}

export default Gallery;