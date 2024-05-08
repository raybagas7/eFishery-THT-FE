import React, { useState } from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const MobileSideBar = () => {
  const [asideHide, setAsideHide] = useState<boolean | undefined>();

  const toggleAside = () => {
    setAsideHide((prev) => !prev);
  };

  return (
    <>
      <MobileNavigation toggleAside={toggleAside} />
      {asideHide && <div>SHOW ASIDE</div>}
    </>
  );
};

export default MobileSideBar;
