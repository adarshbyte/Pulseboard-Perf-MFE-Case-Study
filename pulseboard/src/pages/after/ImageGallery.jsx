import images from "../../temp/optimisedImages.json";
import LazyImage from "../after/StrictLazyImage";
import { List } from "react-window";

const ITEM_IMG_W = 400;
const ITEM_IMG_H = 400;
const ITEM_PAD = 16;
const ITEM_TITLE = 28; 
const ITEM_SIZE = ITEM_IMG_H + ITEM_PAD * 2 + ITEM_TITLE; 
const Row = ({ index, style, data }) => {
  const item = data[index];
  return (
    <div style={{ ...style, padding: "10px" }}>
      <p>
        {item.id} {item.title}
      </p>
      <LazyImage
        srcSet={item.srcset}
        sizes={item.sizes}
        width={item.width}
        height={item.height}
        alt={item.title}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
const AfterImageGallery = () => {
  return (
    <div>
      <List
        rowHeight={400}
        rowCount={images.length}
        width={"100%"}
        rowComponent={Row}
        rowProps={{ data: images }}
      />
    </div>
  );
};
export default AfterImageGallery;
