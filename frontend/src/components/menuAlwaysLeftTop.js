import { useNavigate } from "react-router-dom";
import {isSlideBarOpened} from '../utils/contextList';
import { useContext } from 'react';
function MenuAlwaysLeftTop() {
  const navigate = useNavigate();
  const {state:isOpened, actions:setOpened} = useContext(isSlideBarOpened);

    // state: isOpened,
    // actions: setOpened,
  return(
    <div className="menuDiv-MenuAlwaysLeftTop">
      <div className="slidingMenuButton" onClick={()=>{setOpened(!isOpened)}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>
    
      </div>
      <div className="goHome" onClick={()=>{navigate("/")}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      </div>
      <div className="goPrev" onClick={()=>{navigate(-1)}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>
      </div>
    </div>
  );
}
export default MenuAlwaysLeftTop;