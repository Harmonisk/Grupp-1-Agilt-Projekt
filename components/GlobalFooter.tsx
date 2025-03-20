//Component; GlobalFooter
//Acceptance Criteria:
//-The component exist at the bottom of parent component

import React from "react";

export default function GlobalFooter() {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="footer-brand"></div>
          {/* <ContactInfo></ContactInfo> */}
        </div>
      </div>
      <p>&copy; 2025 Company Name</p>
    </footer>
  );
}
