import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";

import Logout from "../../components/Logout";
import Title from "../../components/Title";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import './index.css';

export default function Admin() {
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

  return (
<>
    <Title
    title="Admin"
    text={!session ? "Please login" : "Logged in as " + session.user.email}
  />
<section className="home-login">
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      ) : (
        <>
          <Logout />
        </>
      )}
    </section>
    </>
  );
}
