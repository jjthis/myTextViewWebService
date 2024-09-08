import styles from "../styles/textViewPage.module.css";
import "../styles/textViewPage.css";
import {encodeBase64} from "../utils/base64Url";
 
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
function TextViewPage() {
  const { id } = useParams();
  let [line,setLine] = useState(0);
  let [text,setText] = useState("");
  useEffect(()=>{
    // setText("");
    axios.get('https://063c77ec-cfa9-4a5e-b257-62c5f0c0e342-00-udpmwag5y4f1.sisko.replit.dev:8080/file/'+encodeBase64(id)+"?line="+line, [], {
      headers: {
        'Content-Type': 'application/json & application/x-www-form-urlencoded'
      }
    }).then((res) => {
      setText(res.data);
    });
  },[line,id]);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[text])
  
  return (
   <>
     <div>
       {id}
     </div>
     <div className={styles.mainTextViewContents}>
       { 
         text.split('\n').map( (a,idx) => {
         return (
           <p align="left" key={(line+idx)}>{a}</p>
         );
         })  
       }
     <div className={styles.nextPrevButton}>
        <Button style={{height:"50px",width:"-webkit-fill-available"}} text="Prev" onClick={()=>{setLine(line-70)}}/>
        <Button style={{height:"50px",width:"-webkit-fill-available"}} text="Next" onClick={()=>{setLine(line+70)}}/>
     </div>
        </div>
   </>
  );
}
export default TextViewPage;
