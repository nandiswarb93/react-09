import React from "react";
import NavbarProject from "./navbarproject";

import ControlForm from "../hooks/useEffect/controlledforms/controlForm";
import RegistrationForm from "../hooks/useEffect/useEffect2/registrationform";
import RegistrationFormWithValidation from "../hooks/useEffect/controlledforms/registrationform";

const RegistrationProject = () => {
  return (
    <>
      <NavbarProject />

      <RegistrationFormWithValidation />
    </>
  );
};

export default RegistrationProject;
