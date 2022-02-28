import { ButtonGroup, Button } from "components";

import { Label } from "./style";

const FinishingPicker = ({ finishes, onSelect, selectedFinish, embroideryPriceDifference }) => {
  return (
    <>
      <Label>
        <b>Finishing</b>  
      </Label>

      <ButtonGroup block>
        {finishes.map((finish, index) => (
          <Button 
            key={index}
            type="default" 
            gradient={`${selectedFinish === finish}`} 
            shape="round" 
            style={{ width: '50%' }}
            onClick={() => onSelect(finish)}
          >
            {finish === 'Embroidery' ? `${finish} (+ €${embroideryPriceDifference})` : finish}
          </Button>
        ))}
      </ButtonGroup>
      
    </>
  )
};

export default FinishingPicker;
