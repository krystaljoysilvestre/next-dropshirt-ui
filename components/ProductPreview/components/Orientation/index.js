import orientations from 'constants/orientations';

import { ButtonGroup, Button } from 'components';

const Orientation = ({ selected, onSelect }) => {
  return (
    <ButtonGroup style={{ width: '50%' }}>
      {orientations.map((orientation, index) => (
        <Button
          key={index}
          gradient={`${selected === orientation}`}
          type="default"
          onClick={() => onSelect(orientation)}
          style={{ width: `${100 / orientations.length}%` }}
        >
          {orientation}
        </Button>
      ))}
    </ButtonGroup>
  )
};

export default Orientation;
