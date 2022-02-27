import { useEffect, useState, useRef } from 'react';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

import { Wrapper, Content, Label, StyledInput, StyledButton } from './style';

const Search = ({ label }) => {
  const searchLabel = useRef(null);
  const searchInputContainer = useRef(null);
  const searchInput = useRef(null);

  const [mode, setMode] = useState('');

  useEffect(() => {
    searchInputContainer.current.classList.add("hidden");

    if (mode === 'searching') {
      searchInputContainer.current.classList.remove("hidden");

      setTimeout(() => {
        searchLabel.current.classList.add("hidden");
        searchInput.current.focus();
      }, 300);
    }
  }, [mode]);

  return (
    <Wrapper isActive={mode === 'searching'}>
      <Content 
        ref={searchLabel} 
        className={`
          ${mode === 'searching' ? 'fadeOutUp' : ''} 
          ${mode === 'display' ? 'fadeInDown' : ''}
        `}
      >
        <Label>{label}</Label>
        <SearchOutlined onClick={() => setMode('searching')} />
      </Content>

      <Content 
        ref={searchInputContainer} 
        className={mode === 'searching' ? 'fadeInUp' : 'fadeOutDown'}
      >
        <StyledInput 
          ref={searchInput}
          autoFocus
          placeholder="I am looking for..."
          suffix={<CloseOutlined onClick={() => setMode('display')} />}
        />
        <StyledButton 
          shape="round"
          size="large"
        >
          Search
        </StyledButton>
      </Content>
    </Wrapper>
  )
};

export default Search;
