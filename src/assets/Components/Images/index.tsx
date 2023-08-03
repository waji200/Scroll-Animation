

export const backgroundAnimation = () => {
    const images: string[] = []
    
    
for (let i = 0; i < 400; i++) {
    const imageName = `./hero_${String(i).padStart(5, '0')}.webp`;
    import(imageName)
      .then((imageModule) => {
        images.push(imageModule.default);
      })
      .catch((error) => {
        console.error(`Error loading image ${imageName}:`, error);
      });
  }
    
    return images;
}