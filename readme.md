8/10
이 프로젝트는 내가 사용할 Text Viewer 겸 Storage이다.

frontEnd로는 요즘 많이 유행하는 React를 사용할 예정이고
backEnd로는 간단하게 Express를 사용할 예정이다.

build 방법
```
cd backEnd && pm2 start main.js --watch
cd frontend && npm start
```

종료방법
```
pm2 stop main
```