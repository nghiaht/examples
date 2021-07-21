import { useEffect } from "react";

function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "1011747472244365");
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v11.0",
    });
  };

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

function reload() {  
  console.log("reload")
  window.FB.XFBML.parse();
}

export function Facebook1() {
  useEffect(() => {
    console.log("Facebook1")
    init();

    // var interval = window.setInterval(() => {
    //   console.log("Facebook1 interval")
    //   if (window.FB && window.FB.XFBML) {
    //     window.clearInterval(interval);
    //     interval = null;
    //     reload();
    //   }
    // }, 500);

    return function cleanup() {
      console.log("cleanup");
      (function (d, id) {
        var target =  d.getElementById(id);
        if (target) {
          target.parentNode.removeChild(target);
          
        }        
      })(document, "facebook-jssdk");

      if (window.FB) {
        delete window.FB;
      }
    }
  }, []);
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
