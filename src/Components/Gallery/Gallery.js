import React from "react";
import { useQuery } from "react-query";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { FaDownload } from "react-icons/fa";
import classes from "./Gallery.module.css";
import Bg from "../Layout/Bg";

const Gallery = () => {
  const { data: imageUrls = [], isLoading } = useQuery(
    "imageUrls",
    async () => {
      const storage = getStorage();
      const folderRef = ref(storage, "photos");
      const res = await listAll(folderRef);
      const promises = res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { id: itemRef.name, url };
      });
      return Promise.all(promises);
    }
  );

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    link.target = "_self";
    link.click();
  };

  return (
    <div className={classes.galleryContainer}>
      <div>
        <Bg />
      </div>
      <div className={classes.welcomeText}>
        <h1>HQ background images</h1>
        <p>
          Discover beautiful images from around the world. Browse our beautiful
          selection of free background images–all submitted by our community of
          talented contributors and completely free to download and use.
        </p>
        <p>
          {" "}
          Explore a diverse collection of captivating images and unleash your
          artistic vision with powerful editing tools. Let your creativity soar!
          Transform ordinary moments into extraordinary masterpieces. Let your
          creativity soar with PhotoLab's vast collection and powerful editing
          tools.
        </p>
      </div>
      <div className={classes.loadingContainer}>
        {isLoading ? (
          <p className={classes.loading}>Loading images...</p>
        ) : (
          <div className={classes.grid}>
            {imageUrls.map((image) => (
              <div key={image.id} className={classes.imageContainer}>
                <img
                  src={image.url}
                  alt="Images"
                  className={classes.image}
                  loading="lazy"
                />
                <div
                  className={classes.downloadButton}
                  onClick={() => handleDownload(image.url)}
                >
                  <FaDownload className={classes.downloadIcon} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
