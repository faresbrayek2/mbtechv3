import React from "react";
import ContactInfo from "@/components/ContactInfo/page";
import Contactform from "@/components/Contactform/page";

function page() {
  return (
    <div className="pt-20">
      <Contactform />
      <ContactInfo />
    </div>
  );
}

export default page;
