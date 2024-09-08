// import { useNavigate } from "react-router-dom";
import {isSlideBarOpened} from '../utils/contextList';
import styles from '../styles/menuView.module.css';
import { useContext, useRef, useEffect } from 'react';
function MenuView() {
  // const navigate = useNavigate();
  const {state:isOpened, actions:setOpened} = useContext(isSlideBarOpened);
  const slideRef = useRef(null);

  useEffect(() => {
    function handleFocus(e) {
      if (slideRef.current && !slideRef.current.contains(e.target)) {
        setOpened(false);
      }
    }
    document.addEventListener("mouseup", handleFocus);
    
    return () => { document.removeEventListener("mouseup", handleFocus); };
  }, [slideRef,setOpened]);

  useEffect(()=>{
    function keyDownEventListener(e){
      if(e.key === 'Escape'){
        setOpened(false);
      }else if(e.key === 'ArrowLeft'){
        setOpened(false);
      }else if(e.key === 'ArrowRight'){
        setOpened(true);
      }
    }

    let start_x,end_x;
    
    function touch_start(event) {
      start_x = event.touches[0].pageX
    }

    function touch_end(event) {
      end_x = event.changedTouches[0].pageX;
      if(Math.abs(end_x - start_x) < 65)return;
      // alert(end_x);
      if(start_x > end_x){
        setOpened(false);
      }else{
        setOpened(true);
      }
    }

    window.addEventListener( "keydown", keyDownEventListener ); 
    window.addEventListener('touchstart', touch_start);
    window.addEventListener('touchend', touch_end);
    return () => { 
      window.removeEventListener( "keydown", keyDownEventListener );
      window.removeEventListener('touchstart', touch_start);
      window.removeEventListener('touchend', touch_end);
    };
  },[setOpened]);
  
  return(
    <div ref={slideRef} className={styles.slideMenuMainDiv} style={{transform: `translatex(${(isOpened?"0%":"-100%")})`}}>
      {isOpened+""}
    </div>
  );
}
export default MenuView;