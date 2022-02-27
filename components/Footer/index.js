import logo from 'public/logo-white.png';
import { Wrapper, Logo, Contact } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <Logo src={logo.src} />
      <Contact>
        <div>support@dropshirt.com</div>
        <div>Amsterdam</div>
      </Contact>
    </Wrapper>
  )
};

export default Footer;
