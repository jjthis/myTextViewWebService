import { useEffect, useState } from "react";
import styles from "../styles/textListPage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {decodeBase64} from "../utils/base64Url";
import UploadBox from "../components/uploadBox";


function TextListPage() {
  const navigate = useNavigate();
  let [fileList,setFileList] = useState([]);
  useEffect(()=>{
    axios.get('https://063c77ec-cfa9-4a5e-b257-62c5f0c0e342-00-udpmwag5y4f1.sisko.replit.dev:8080/fileList', [], {
      headers: {
        'Content-Type': 'application/json & application/x-www-form-urlencoded'
      }
    }).then((res) => {
      setFileList(res.data);
    });
  },[]); 
  let [isUploadFile,setIsUploadFile] = useState(false);
  
  return (
    <>
      
          {
            isUploadFile?<div style={{position:'fixed',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',backdropFilter:'blur(5px)'}} >
              <div>
                <UploadBox/>
              </div>
            </div>
              :null
          }
      <div className={styles.plusButton}>
        <div className={isUploadFile?(styles.innerPlusButton+' '+styles.rotate):styles.innerPlusButton}  onClick={()=>{setIsUploadFile(!isUploadFile);}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
      </div>
      <div className={styles.main}>
        { 
          fileList.map( (a,idx) => {
          return (
            <p align="center" key={idx} onClick={()=>{navigate("/TextView/"+decodeBase64(a));}}>{decodeBase64(a)}</p>
          );
          })  
        }


      </div>
    </>
    
  );
}
export default TextListPage;
