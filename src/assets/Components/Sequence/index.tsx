import React, { forwardRef, Ref } from "react";
import { Skeleton } from "../Skeleton/index";
import ImageArray from "./newImages";
import { ImageState } from "../hook"; // Make sure to import the ImageState type

interface SequenceProps {
  progress: number;
}

const ImageSequence = forwardRef(({ progress }: SequenceProps, ref: Ref<HTMLSpanElement>) => {
  const newImages: ImageState[] = ImageArray();

  const index = Math.round(progress * (newImages.length - 1)); // Removed the redundant "* 1"

  if (newImages[index]?.status === "loading") {
    return <Skeleton width="100%" height="100%" />;
  } else {
    return (
      <span ref={ref}>
        {newImages.map((item, i) => (
          <span
            key={i}
            style={{
              display: i !== index ? "none" : "block",
              height: "100%",
              width: "100%",
              backgroundImage: `url('${item.image ? item.image.src : null}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: 0,
            }}
          />
        ))}
      </span>
    );
  }
});

export default ImageSequence;
