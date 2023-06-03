import { useState } from 'react';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event : any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Ảnh đã được tải lên thành công');
      } else {
        console.error('Lỗi khi tải lên ảnh:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi khi tải lên ảnh:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Tải lên ảnh</button>
    </div>
  );
};

export default UploadImage;
