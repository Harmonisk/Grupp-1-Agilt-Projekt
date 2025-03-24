//Component; GlobalFooter
//Acceptance Criteria:
//-The component exist at the bottom of parent component

import React from "react";
import ContactInfo from "./ContactInfo";

export default function GlobalFooter() {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="wrapper">
          <div className="footer-brand"></div>
          <ContactInfo />
        </div>
      </div>
      <p>&copy; 2025 Company Name</p>
    </footer>
  );
}
