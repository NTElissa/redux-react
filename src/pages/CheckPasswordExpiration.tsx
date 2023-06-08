import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { passwordExpirationAction } from "../redux/action/passwordExpirationAction";

function PopupMessage() {
  const dispatch = useDispatch();
  const { passwordExpiration, status } = useSelector((state:any) => state.passwordExpiration);

  useEffect(() => {
    const popupInterval = setInterval(() => {
      dispatch(passwordExpirationAction());
    }, 40000); // 1 minute 

    return () => clearInterval(popupInterval);
  }, [dispatch]);

  console.log("this backend feedback", passwordExpiration);

  if (passwordExpiration && passwordExpiration.expired) {
    return (
      <div className="popup-container">
        <p className="popup-message">
          Please change your password. It has expired!
        </p>
      </div>
    );
  }

  if (!status) {
    return null; // Don't render anything if there is no popup message
  }

  return (
    <div className="popup-container">
      <p className="popup-message">
          Please change your password. It has expired!
        </p>
      <p className="popup-message">{status}</p>
    </div>
  );
}

export default PopupMessage;
