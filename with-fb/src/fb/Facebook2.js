import { Component } from "react";

export class Facebook2 extends Component {
  componentDidMount() {
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

    var interval = window.setInterval(() => {
      console.log("interval")
      if (window.FB && window.FB.XFBML) {
        window.clearInterval(interval);
        interval = null;
        this.reload();
      }
    }, 500);
  }

  reload() {  
    console.log("reload")
    window.FB.XFBML.parse();
  }
  

  render() {
    return (
      <div>
        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat"></div>
      </div>
    );
  }
}
