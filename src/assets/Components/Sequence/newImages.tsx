import { backgroundAnimation } from "../Images/index";
import { useImage } from "../hook";

const NewBackgroundAnimation = () => {
  const images = backgroundAnimation();

  const newImages = useImage(images);

  return newImages;
};

export default NewBackgroundAnimation;
