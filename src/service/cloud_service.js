class CloudService {
  async uploadImage(imagePath) {
    const formData = new FormData();
    formData.append('file', imagePath);
    formData.append('upload_preset', 'sva51caf');
    const url = 'https://api.cloudinary.com/v1_1/djmhpv5wg/upload';
    const result = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    return await result.json();
  }
}

export default CloudService;
