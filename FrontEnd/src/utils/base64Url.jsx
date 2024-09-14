function encodeBase64(str){
   return window.btoa(unescape(encodeURIComponent( str ))).replaceAll('/','-').replaceAll('+','_').replaceAll("=","");
}
function decodeBase64(str){
   return decodeURIComponent(escape(window.atob( str ))).replaceAll('-','/').replaceAll('_','+');
}
export {
  decodeBase64,
  encodeBase64
};