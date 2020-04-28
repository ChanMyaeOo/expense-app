// Higher Order Component (HOC) is a component that rendered another component

import React from "react";
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>These are the details: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private information. Please don't share.</p>}

      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to see your information.</p>
      )}
    </div>
  );
};
const AdminWarning = withAdminWarning(Info);

const AuthInfo = requiredAuthentication(Info);

// export default AdminWarning;
export default AuthInfo;
