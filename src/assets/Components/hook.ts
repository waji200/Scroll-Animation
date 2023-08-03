import { useState, useEffect } from "react";

export interface ImageState {
  image: HTMLImageElement | undefined;
  status: "loading" | "loaded" | "failed";
}

const defaultState: ImageState = { image: undefined, status: "loading" };

export const useImage = (urls: string[], crossOrigin?: string): ImageState[] => {
  const [imagesData, setImagesData] = useState<ImageState[]>(
    urls.map(() => ({ ...defaultState }))
  );

  useEffect(() => {
    const loadImageData = async () => {
      const promises = urls.map((url, index) => {
        return new Promise<void>((resolve) => {
          const img = document.createElement("img");

          function onload() {
            setImagesData((prevImagesData) => {
              const newImagesData = [...prevImagesData];
              newImagesData[index] = { image: img, status: "loaded" };
              return newImagesData;
            });
            resolve();
          }

          function onerror() {
            setImagesData((prevImagesData) => {
              const newImagesData = [...prevImagesData];
              newImagesData[index] = { image: undefined, status: "failed" };
              return newImagesData;
            });
            resolve();
          }

          img.addEventListener("load", onload);
          img.addEventListener("error", onerror);
          crossOrigin && (img.crossOrigin = crossOrigin);
          img.src = url;
        });
      });

      await Promise.all(promises);
    };

    loadImageData();
  }, [urls, crossOrigin]);

  return imagesData;
};
