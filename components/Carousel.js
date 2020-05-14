import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';

const Carousel = ({ images, showThumbnails }) => <ImageGallery items={images} showThumbnails={showThumbnails} />

export default Carousel;