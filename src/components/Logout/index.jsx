import {supabase} from '../../utils/supabase';
import './index.css';

const Logout = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
  };

  return <button onClick={handleLogout} className="logout">Logout</button>;
}

export default Logout;