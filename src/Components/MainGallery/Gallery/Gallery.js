import React, { Fragment, useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import classes from "./Gallery.module.css";
import { useSearchContext } from "../../../Context/context";

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const { searchTerm, updateSearchTerm } = useSearchContext();

  const backgroundImage =
    "https://images.pexels.com/photos/19745668/pexels-photo-19745668/free-photo-of-pelican-swimming-in-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const handleSearchChange = (e) => {
    updateSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
    updateSearchTerm("");
  };

  useEffect(() => {}, [searchTerm]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const key = "xLdPq3JkoEB1yIzQinBLP1qVpRYZNsiCHKqgoabIaVVh1QP21G9ZJEha";
      const categories = [
        "nature",
        "travel",
        "music",
        "sports",
        "technology",
        "fashion",
      ];

      const initialCategory =
        categories[Math.floor(Math.random() * categories.length)];

      const link = `https://api.pexels.com/v1/search?query=${initialCategory}&per_page=18`;

      try {
        const response = await fetch(link, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: key,
          },
        });

        const data = await response.json();

        const shuffledArray = shuffleArray(data.photos);
        setShuffledImages(shuffledArray);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const fetchData = async () => {
    const key = "xLdPq3JkoEB1yIzQinBLP1qVpRYZNsiCHKqgoabIaVVh1QP21G9ZJEha";
    const link = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=18`;

    try {
      const response = await fetch(link, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: key,
        },
      });

      const data = await response.json();

      const shuffledArray = shuffleArray(data.photos);
      setShuffledImages(shuffledArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleDownload = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "photolab.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <Fragment>
      <div
        className={classes.homeMain}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <h1>
            The Best Free Stock Photos, Royalty-Free Images & Videos Shared by
            Creators
          </h1>
          <p className={classes.content_p}>
            Search for stunning images and videos. Discover the creativity of
            photographers worldwide.
          </p>
          <div className={classes.searchBar}>
            <input
              type="text"
              placeholder="Search for free photos"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>Search</button>
          </div>
          <p className={classes.content_p}>
            Trending : Nature, Travel, Fashion, Sports, Cars...
          </p>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.grid}>
          {shuffledImages.map((image) => (
            <div key={image.id} className={classes.imageContainer}>
              <img
                src={image.src.large}
                alt="Images"
                className={classes.image}
                loading="lazy"
              />
              <div
                className={classes.downloadButton}
                onClick={() => handleDownload(image.src.large)}
              >
                <FaDownload className={classes.downloadIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.loadingContainer}>
        {shuffledImages.length === 0 && (
          <p className={classes.loading}>No results found...</p>
        )}
      </div>
    </Fragment>
  );
};

export default Gallery;
