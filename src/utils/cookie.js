function setCookie( name, value ) {
  var path = location.pathname;
  // pathをフォルダ毎に指定する場合のIE対策
  var paths = new Array();
  paths = path.split("/");
  if( paths[paths.length-1] != "" ){
    paths[paths.length-1] = "";
    path = paths.join("/");
  }
  // 有効期限の日付
  const expireDays = 3;
  var exTime = new Date().getTime();
  var clTime = new Date(exTime + ( 60 * 60 * 24 * 1000 * expireDays ));
  var exDate = clTime.toUTCString();
  // クッキーに保存する文字列を生成
  var cookie = "";
  cookie += name + "=" + escape(value);// 値はエンコードしておく
  cookie += "; path="+ path;
  cookie += "; expires=" + exDate;
  cookie += "; ";
  // クッキーに保存
  document.cookie = cookie;
}

function getCookie( name ) {
  var st="";
  var ed="";
  if( document.cookie.length > 0 ){
    // クッキーの値を取り出す
    st=document.cookie.indexOf(name + "=");
    if ( st!=-1 ) {
      st = st + name.length+1;
      ed = document.cookie.indexOf(";", st);
      if( ed == -1 ) ed = document.cookie.length;
      // 値をデコードして返す
      return unescape( document.cookie.substring(st,ed) );
    }
  }
  return null;
}

class Cookie {

  setAccountToCookie( userName, userId, password ) {
    setCookie( "userName", userName );  
    setCookie( "userId",   userId );  
    setCookie( "password", password );  
  }

  getAccountFromCookie(){
    const userName = getCookie( "userName" );
    const userId   = getCookie( "userId" );
    const password = getCookie( "password" );

    return {
      userName: userName,
      userId:   userId,
      password: password,
    };
  }
}

const cookie = new Cookie();
export default cookie;
