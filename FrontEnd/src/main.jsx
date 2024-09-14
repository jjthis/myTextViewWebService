import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
// import reportWebVitals from './utils/reportWebVitals.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <div>
    //     <h1>
    //         asdasd
    //     </h1>
    // </div>
       <App /> 
    
);
/* </React.StrictMode>
이 태그는 StrictMode는 리액트에서 제공하는 검사 도구이다. 개발 모드일때 디버그를 통하여, 이 태그로 감싸져있는 App 컴포넌트까지 다.. 자손을 검사하는 것이다. 안전하지 않은 생명 주기를 가진 컴포넌트, 권장되지 않은 부분, 배포 후 문제가 될 수 있는 부분들까지 미리 확인하는 친구이다.
///https://velog.io/@gene028/%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-3-UseEffect%EB%8A%94-%EC%99%9C-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94%EA%B1%B8%EA%B9%8C
그래서 이 태그를 감싸면 렌더링이 두번된다
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
