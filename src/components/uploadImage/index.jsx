import React, { useState } from 'react';

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <img
        src={imagePreview || '../../../public/upload.svg'}
        alt="Upload"
        style={{
          objectFit: 'cover',
          width: '350px',
          height: '350px',
          marginBottom: '55px',
          cursor: 'pointer',
          borderRadius: '10px'
        }}
        onClick={handleImageClick}
      />

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
