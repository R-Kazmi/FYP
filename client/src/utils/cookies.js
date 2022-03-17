export function setCookie(cookiename, cookievalue, expirationdays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirationdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

export function getCookie(cookiename) {
  var cookie = cookiename + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookie) === 0) {
      return c.substring(cookie.length, c.length);
    }
  }
  return "";
}

export function checkCookie(cookiename) {
  var cookie = getCookie(cookiename);
  if (cookie === "") {
    return null;
  }

  return cookie;
}