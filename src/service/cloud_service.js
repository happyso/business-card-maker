const cloudinaryConfig = {
  url: process.env.REACT_APP_IMAGE_CLOUDINARY_URL,
};

class CloudService {
  constructor() {
    this.assetOption = {
      colors: true,
    };
    this.uploadOption = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
  }

  async uploadImage(imagePath) {
    const url = 'https://api.cloudinary.com/v1_1/djmhpv5wg/upload';
    const formData = new FormData();
    formData.append('file', imagePath);
    formData.append('upload_preset', 'sva51caf');

    const result = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    return await result.json();
  }

  // async getAssetInfo(publicId) {
  //   try {
  //     // Get details about the asset
  //     const result = await cloudinary.api.resource(publicId, this.assetOption);
  //     console.log(result);
  //     return result.colors;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

export default CloudService;
