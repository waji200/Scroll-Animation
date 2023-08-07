import { useEffect } from 'react';
import { gsap } from 'gsap';

const BlobAnimation = ({className}:{className: string}) => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    gsap.set(circles, { rotation: "-=144" });

    gsap.fromTo(
      circles,
      { rotation: "-=144" },
      { rotation: "+=216", repeat: -1, yoyo: true, duration: 2 }
    );
  }, []);

  return (
    <div className={`circles ${className}`} id="circles">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default BlobAnimation;