import { useEffect } from "react";
import { init, cleanup } from "./fb";

export function Facebook1() {
  useEffect(() => {
    console.log("Facebook1");
    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}
