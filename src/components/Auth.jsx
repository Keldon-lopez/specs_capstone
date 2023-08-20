import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/helper/supabaseClient'

function Login() {
  const [session, setSession] = useState(null)

  useEffect(() => {
	supabase.auth.getSession().then(({ data: { session } }) => {
	  setSession(session)
	})

	const {
	  data: { subscription },
	} = supabase.auth.onAuthStateChange((_event, session) => {
	  setSession(session)
	})

	return () => subscription.unsubscribe()
  }, [])

  if (!session) {
	return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
	return (<div>Logged in!</div>)
  }
}

export default Login;