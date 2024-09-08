function encodeBase64(str){
   return btoa(unescape(encodeURIComponent( str ))).replaceAll('/','-').replaceAll('+','_').replaceAll("=","");
}
function decodeBase64(str){
   return decodeURIComponent(escape(atob( str ))).replaceAll('-','/').replaceAll('_','+');
}
module.exports = {
   decodeBase64:decodeBase64,
   encodeBase64:encodeBase64
};