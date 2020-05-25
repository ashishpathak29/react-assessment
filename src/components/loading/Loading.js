import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
  const { message } = props;
  return (
    <div className="wrap">
      <div className="loading">
        <div className="bounceball"></div>
            <div className="message-text">{message}</div>
            </div>
      </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default Loading;
