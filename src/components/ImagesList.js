import Image from "next/image";

import styles from "./ImagesList.module.scss";
import "../app/globals.scss";

const ImagesList = ({ images }) => {
  return (
    <div className={styles.images_grid}>
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            alt={image.title}
            src={image.thumbnailUrl}
            className={styles.image}
            width={100}
            height={100}
          ></Image>
        );
      })}
    </div>
  );
};
export default ImagesList;
