import { useEffect } from "react";
import Script from 'next/script'
import {init} from "./fb"

export function Facebook3() {
  useEffect(() => {
    init(true);
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script
        src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
