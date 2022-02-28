import { Label, List, Item } from './style';

const DetailsList = ({ detailItems }) => (
  <>
    <Label>
      <b>Details</b>  
    </Label>

    <List>
      {detailItems.map((detail, index) => (
        <Item key={index}>{detail}</Item>
      ))}
    </List>
  </>
);

export default DetailsList;
