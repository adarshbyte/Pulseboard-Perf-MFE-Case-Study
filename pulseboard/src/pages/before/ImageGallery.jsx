import images from '../../temp/images.json';

const ImageGalleryBefore = ()=>{
    return <ul>
        {images.map(image=>{
            return <li key={image.id}>
                <p>{image.id} {image.title}</p>
                <img width={"400px"} loading='lazy' height={"400px"} src={image.url}/>
            </li>
        })}
    </ul>
}
export default ImageGalleryBefore;