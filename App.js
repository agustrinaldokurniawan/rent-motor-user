import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./src/navigation";
import { Snackbar } from "@ouroboros/react-native-snackbar";
import React, { useEffect } from "react";
import { AuthContext } from "./src/context/authContext";

const queryClient = new QueryClient()

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', user: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', user: data });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={[authContext, state]}>
      <QueryClientProvider client={queryClient}>
        <Snackbar />
        <Navigation />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}