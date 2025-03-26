//Component; GlobalFooter
//Acceptance Criteria:
//-The component exist at the bottom of parent component

import React from "react";
import ContactInfo from "./ContactInfo";

export default function GlobalFooter() {
  return (
    <footer className="global-footer">
      <div className="global-footer__container">
        <div className="logo global-footer__logo">
          <div className="logo__image"></div>
        </div>
        <ContactInfo />
      </div>
      <small className="global-footer__copyright">
        &copy; 2025 Company Name
      </small>
    </footer>
  );
}
