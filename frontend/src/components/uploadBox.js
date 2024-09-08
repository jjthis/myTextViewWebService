import styles from '../styles/uploadBox.module.css';
import { useState } from 'react';
import Button from './Button';
import axios from 'axios';

//https://guiyomi.tistory.com/148
///https://velog.io/@aimzero9303/%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0


const Logo = () => (
  <svg className={styles.icon} x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="transparent" d="M0,0h24v24H0V0z"/>
    <path fill="#000" d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19  c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M12,17.5L6.5,12H10v-2h4v2h3.5L12,17.5z M5.1,5l0.8-1h12l0.9,1  H5.1z"/>
  </svg>
);

const UploadBox = () => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);
  const [myFile, setMyFile]= useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setFileInfo = (file) => {
    if(!file){
      setUploadedInfo(null);
      return;
    }setMyFile(file);
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({ name, size, type }); // name, size, type 정보를 uploadedInfo에 저장
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };

  const handleUpload = ({ target }) => {
    const file = target.files[0];
    setFileInfo(file);
  };

  const FileInfo = ({ uploadedInfo }) => (
    <ul className={styles.preview_info}>
      {Object.entries(uploadedInfo).map(([key, value]) => (
        <li key={key}>
          <span className={styles.info_key}>{key}</span>
          <span className={styles.info_value}>{value}</span>
        </li>
      ))}
      <Button style={{height:"50px",width:"-webkit-fill-available", background:"#e6f3fa"}} distinguisher={"SendButton"} onClick={event=>{
        uploadFiles();
        setActive(false);
        setUploadedInfo(null);
      }}text="Send"/>
    </ul>
  );

  const uploadFiles = (e) => {
      // e.preventDefault();
      const formData = new FormData();
      // myFile.name="asd";
      // files.map((file) => {
        formData.append("files", myFile);
      // });

      console.log(Array.from(formData));

      axios.post('https://063c77ec-cfa9-4a5e-b257-62c5f0c0e342-00-udpmwag5y4f1.sisko.replit.dev:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
          console.log(res.data);
      }).catch((err) => {
          console.error(err);
      });
  }

  return (
    <label
      className={isActive ? styles.preview+' '+styles.active : styles.preview}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
      onClick={x=>{if(x.target.getAttribute("distinguisher") === "SendButton" )x.preventDefault();

       }}
    >
      <input type="file" className={styles.file} onChange={handleUpload} name="textFile" />
      {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
      {!uploadedInfo && (
        <>
          <Logo />
          <p className={styles.preview_msg}>클릭 혹은 파일을 이곳에 드롭하세요.</p>
          <p className={styles.preview_desc}>파일당 최대 3MB</p>
        </>
      )}
    </label>
  );
};


export default UploadBox;