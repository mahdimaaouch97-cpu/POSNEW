function encrypt(data){return btoa(unescape(encodeURIComponent(JSON.stringify(data))));}
function decrypt(data){return JSON.parse(decodeURIComponent(escape(atob(data))));}
