import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import { Checkbox, Radio, Tag } from 'components';

import { 
  Wrapper, 
  FiltersSelection,
  DropdownButton, 
  DropdownContainer, 
  CheckboxLabel, 
  Colors, 
  ColorItem,
  ActiveFilters,
  StyledTag
} from './style';

const Filters = () => {
  const gender = (
    <DropdownContainer>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Men
          <span>(120)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Women
          <span>(108)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Unisex
          <span>(57)</span>
        </CheckboxLabel>
      </Checkbox>
    </DropdownContainer>
  );

  const category = (
    <DropdownContainer>
      <Checkbox checked onChange={() => {}} block>
        <CheckboxLabel>
          Men
          <span>(120)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Women
          <span>(108)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Unisex
          <span>(57)</span>
        </CheckboxLabel>
      </Checkbox>
    </DropdownContainer>
  );

  const size = (
    <DropdownContainer>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Men
          <span>(120)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Women
          <span>(108)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Unisex
          <span>(57)</span>
        </CheckboxLabel>
      </Checkbox>
    </DropdownContainer>
  );

  const fit = (
    <DropdownContainer>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Men
          <span>(120)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Women
          <span>(108)</span>
        </CheckboxLabel>
      </Checkbox>
      <Checkbox onChange={() => {}} block>
        <CheckboxLabel>
          Unisex
          <span>(57)</span>
        </CheckboxLabel>
      </Checkbox>
    </DropdownContainer>
  );

  const color = (
    <Colors>
      <ColorItem>
        <Radio color="red" checked onChange={() => {}}>Red Red Red Red Red Red Red</Radio>
      </ColorItem>
      <ColorItem>
        <Radio color="green">Green</Radio>
      </ColorItem>
      <ColorItem>
        <Radio color="yellow">Yellow</Radio>
      </ColorItem>
      <ColorItem>
        <Radio color="blue">Blue</Radio>
      </ColorItem>    
    </Colors>
  );

  return (
    <Wrapper>
      <FiltersSelection>
        <Dropdown overlay={gender} trigger={['click']}>
          <DropdownButton>
            Gender
            <CaretDownOutlined />
          </DropdownButton>
        </Dropdown>

        <Dropdown overlay={category} trigger={['click']}>
          <DropdownButton >
            Category
            <CaretDownOutlined />
          </DropdownButton>
        </Dropdown>

        <Dropdown overlay={size} trigger={['click']}>
          <DropdownButton>
            Size
            <CaretDownOutlined />
          </DropdownButton>
        </Dropdown>

        <Dropdown overlay={fit} trigger={['click']}>
          <DropdownButton>
            Fit
            <CaretDownOutlined />
          </DropdownButton>
        </Dropdown>

        <Dropdown overlay={color} trigger={['click']}>
          <DropdownButton>
            Color
            <CaretDownOutlined />
          </DropdownButton>
        </Dropdown>
      </FiltersSelection>

      <ActiveFilters>
        <Tag closable>Shirts</Tag>
        <Tag closable>Sweatshirts</Tag>
        <Tag closable>S</Tag>
        <Tag closable>Black</Tag>
        <StyledTag>Clear All</StyledTag>
      </ActiveFilters>
    </Wrapper>
  )
};

export default Filters;
