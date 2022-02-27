import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${props => props.theme.background.dark};
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12%;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const Contact = styled.div`
  color: ${props => props.theme.text.light};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
