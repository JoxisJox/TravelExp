import logo from './logo.svg';
import './App.css';
import AppName from "./components/app_name";
import PromoHeader from './components/promo_header';
import PromoFooter from './components/promo_footer';
import background from './pics/landingPageBackground.jpg';
import RegisterButton from './components/register_button';
import LoginButton from './components/login_button';

function App(){
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "100% 100%",
      minHeight: "100vh",
      height: '100%',
      }}>
      <AppName />
      <PromoHeader />
      <PromoFooter />
      <RegisterButton />
      <LoginButton />
    </div>
  )
}

export default App;
