import { useEffect } from "react";
import { clearInterval } from "timers";

function loadScript() {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "1011747472244365");
  chatbox.setAttribute("attribution", "biz_inbox");

  // window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v11.0",
  });
  // };
}

export function Facebook1() {
  useEffect(() => {
    loadScript();
    var interval = window.setInterval(() => {
      if (window.FB) {
        window.clearInterval(interval);
        interval = null;
        init();
      }
    }, 500);
  }, []);
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
