import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { passwordExpirationAction } from "../redux/action/passwordExpirationAction";

function PopupMessage() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.passwordExpiration);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      dispatch(passwordExpirationAction());
    }, 180000); // 3 minutes in milliseconds

    return () => clearTimeout(popupTimeout);
  }, [dispatch]);

  const passwordExpirationData = useSelector((state) => state.passwordExpiration.data);

  if (passwordExpirationData && passwordExpirationData.expired) {
    return (
      <div className="popup-container">
        <p className="popup-message">Password expired! Please change your password.</p>
      </div>
    );
  }

  if (!message) {
    return null; // Don't render anything if there is no popup message
  }

  return (
    <div className="popup-container">
      <p className="popup-message">{message}</p>
    </div>
  );
}

export default PopupMessage;
