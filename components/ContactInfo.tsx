//Component: ContactInfo
//Acceptance Criteria:
//-The component contains the contact information of the owner/creator of the website

import React from "react";

export default function ContactInfo() {
  return (
    <address className="contact-info">
      <ul>
        <li className="contact-info__phone">Phone: 555-555-555</li>
        <li className="contact-info__email">
          Email: <a href="mailto:info@store.com">info@store.com</a>
        </li>
      </ul>
    </address>
  );
}
