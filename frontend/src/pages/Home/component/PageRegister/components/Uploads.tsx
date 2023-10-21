import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useState,useEffect } from 'react';

  export let img:File[];
  export let Url:string[];
  export let Base64:string[];

function Uploads() {
  const [images, setImages] = useState<File[]>([]);
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [base64Images, setBase64Images] = useState<string[]>([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: string[] = [];
    const newBase64Images: string[] = [];
    images.forEach((image) => {
      const imageUrl = URL.createObjectURL(image);
      newImageUrls.push(imageUrl);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          newBase64Images.push(event.target.result);
        }
      };
      reader.readAsDataURL(image);
    });

    setImageURLs(newImageUrls);
    setBase64Images(newBase64Images);
  }, [images]);

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setImages([...Array.from(e.target.files)]);
    }
  }

  img = images
  Url = imageURLs
  Base64 =  base64Images

  return (
    <div>
      <div style={{marginLeft:-60}}>
      <Avatar size={64} icon={<UserOutlined />} style={{position:'absolute'}}/>
      {imageURLs.map((imageSrc, idx) => (
        <Avatar size={64} icon={<UserOutlined />}  key={idx} src={imageSrc} alt={`Image ${idx}`}style={{position:'absolute'}}/>
      ))}
      </div>
      <input type="file" accept="image/*" onChange={onImageChange} style={{marginTop:75,marginLeft:-49,position:'absolute',width:200,borderWidth:0}} />
    </div>
  );
}
export default Uploads;