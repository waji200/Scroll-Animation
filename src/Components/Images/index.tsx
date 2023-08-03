

export const backgroundAnimation = () => {
    const images: string[] = []
    
    
for (let i = 0; i <= 399; i++) {
    const imageName = `hero_${String(i).padStart(5, '0')}.webp`;
    const imageURL = `/${imageName}`;
    import(imageURL)
      .then((imageModule) => {
        images.push(imageModule.default);
      })
      .catch((error) => {
        console.error(`Error loading image ${imageURL}:`, error);
      });
  }
    return images;
}