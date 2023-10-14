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
    <div >
      {imageURLs.map((imageSrc, idx) => (
        <img key={idx} style={{position:'absolute',marginTop: 0, marginLeft: 790, width: 373, height: 378, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.30) inset', border: '0.50px #C2C2C2 solid' }} width="640" height="360" src={imageSrc} alt={`Image ${idx}`} />
      ))}
      <div style={{height: 378,width: 0}}>
      <div style={{marginTop: 0, marginLeft: 790, width: 373, height: 378, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.30) inset', border: '0.50px #C2C2C2 solid' }} />
      <img style={{marginTop: -230,marginLeft: 940,width: 72, height: 72,display:'flex'}} src="Rectangle 85.png" />
      <div style={{marginTop: 10, marginLeft: 880,width: 208, height: 32, color: '#C2C2C2', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Attach Transfer slip</div>
      </div>
      <input type="file" accept="image/*" onChange={onImageChange} style={{marginLeft:790,marginTop:10,position:'absolute',width:200,borderWidth:0}} />
    </div>
  );
}
export default Uploads;