import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Default User",
    email: "default@gmail.com",
  },
});

export default UserContext;
