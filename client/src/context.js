import React, { useState } from "react";

const AuthContext = React.createContext({
  username : null 
});

export const AuthContextProvider = (props) => {
  const [username, setUsername] = useState(null);

  const logoutHandler = () => {
    setUsername(null);
  };

  const loginHandler = (username) => {
    setUsername(username);
  };

  return (
    <AuthContext.Provider
      // 記得提供 context 給 Provider
      value={{
        username: username,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;