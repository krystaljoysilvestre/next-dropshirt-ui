import { Wrapper, Check } from './style';

const checkIcon = (
  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.91308 3.53516H1.91326C1.99256 3.53525 2.07081 3.55331 2.14213 3.58798C2.21341 3.62262 2.27591 3.67295 2.32497 3.7352L1.91308 3.53516ZM1.91308 3.53516H1.09394C0.890308 3.53516 0.776602 3.76975 0.902321 3.9292L0.902371 3.92927L4.11214 7.99567L4.11218 7.99573C4.32247 8.26188 4.72568 8.26114 4.93667 7.99617L4.93708 7.99566L10.6597 0.743984C10.6598 0.743781 10.66 0.743578 10.6602 0.743375C10.7884 0.582949 10.6699 0.35 10.4689 0.35H9.6498C9.48941 0.35 9.33668 0.4235 9.2376 0.55044C9.23751 0.550551 9.23742 0.550661 9.23734 0.550771L4.52403 6.52157M1.91308 3.53516L4.52403 6.52157M4.52403 6.52157L2.32506 3.73531L4.52403 6.52157Z" fill="white" stroke="white" strokeWidth="0.3"/>
  </svg>
);

const Checkbox = ({ children, onChange, checked, block }) => (
  <Wrapper onClick={onChange} block={block}>
    <Check checked={checked}>
      {checked && checkIcon}
    </Check>
    {children}
  </Wrapper>
);

export default Checkbox;
