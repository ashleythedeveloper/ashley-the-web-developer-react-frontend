import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

const NotificationAlert = ({ alertType, alertTitle, alertMessage, alertCloseCallback, notificationTimer }) => {

  if (notificationTimer) {
    setTimeout(() => {
      alertCloseCallback();
    }, 5000)
  }
  return (
    // Sets the alertError variable to an alert box if there is an error message to display else sets it to an empty string
    <Alert sx={{ mt: 3, mb: 2 }} severity={`${alertType}`} onClose={alertCloseCallback}>
      <AlertTitle>{`${alertTitle}`}</AlertTitle>
      {alertMessage}
    </Alert>
  )
};

NotificationAlert.defaultProps = {
  alertTitle: '',
  alertMessage: '',
  alertType: '',
  alertCloseCallback: () => {},
  alertCloseTimer: 5000
}

export default NotificationAlert