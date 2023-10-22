import React from 'react';
import Toast from 'react-native-toast-message';

const ToastWithElevation = React.forwardRef((props, ref) => (
  <Toast
    ref={ref}
    style={{
      elevation: 20, // Higher value for elevated positioning
      ...props.style, // Spread any additional style from props
    }}
  />
));

export default ToastWithElevation;
