import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../lib/helper/supabaseClient";

import { useDispatch } from "react-redux";
import { setUserSession } from "../redux/slices/userSessionSlice";

function Login() {
  const dispatch = useDispatch();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <div className="login">
      <div className="loginForm">
        <Auth  
        supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputBorder: '#F48498',
                inputBorderHover: 'black',
                inputBorderFocus: 'black',
                inputText: 'black',
                inputLabelText: 'black',
                inputPlaceholder: '#808080'
              },
            },
          }, }} 
        
        providers={['github']} />
        </div>
      </div>;
  } else {
	dispatch(setUserSession(session));
    return <div>Logged in!</div>;
  }
}

export default Login;
