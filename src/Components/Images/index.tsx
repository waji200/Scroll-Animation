

export const backgroundAnimation = () => {
    const images: string[] = []
    
    
for (let i = 0; i <= 399; i++) {
    const imageName = `/hero_${String(i).padStart(5, '0')}.webp`;
        images.push(imageName);

        // console.error(`Error loading image ${imageName}:`, error);

  }
    return images;
}