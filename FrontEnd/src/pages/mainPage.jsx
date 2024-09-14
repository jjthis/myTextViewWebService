import Button from '../components/Button';
import styles from '../styles/mainPage.module.css';
import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();
  return (
     <div className={styles.main}>
       <Button onClick={()=>{navigate("/TextList");}} text="시작"/>
     </div>
  );
}
export default MainPage;
