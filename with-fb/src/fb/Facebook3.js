import { useEffect } from "react";
import Script from "next/script";
import { cleanup, init } from "./fb";

export function Facebook3() {
  useEffect(() => {
    init(true);

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* https://nextjs.org/docs/basic-features/script */}
      <Script
        // id="facebook-jssdk"  // id to make "cleanup" worked
        src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
