import logo from 'public/logo.png';

import { Button } from 'components';
import { Wrapper, Logo, Center, StyledMenu, StyledMenuItem } from './style';

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo.src} alt="DropShirt logo" />

      <Center>
        <StyledMenu mode="horizontal" defaultSelectedKeys={['collection']}>
          <StyledMenuItem key="collection">Collection</StyledMenuItem>
          <StyledMenuItem key="men">Men</StyledMenuItem>
          <StyledMenuItem key="women">Women</StyledMenuItem>
          <StyledMenuItem key="unisex">Unisex</StyledMenuItem>
          <StyledMenuItem key="kids">Kids</StyledMenuItem>
          <StyledMenuItem key="all">All</StyledMenuItem>
        </StyledMenu>
      </Center>

      <div>
        <Button type="text">Login</Button>
        <Button gradient="true" type="text">
          Make a Design
        </Button>
        <Button type="primary" size="large" shape="round">
          Register
        </Button>
      </div>
    </Wrapper>
  );
};

export default Header;
