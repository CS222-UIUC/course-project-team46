import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Button } from '@mui/material';

function Filter(props) {
  const { allCuisines, selectedCuisines, handleCuisineChange, handleClearSelection } = props;

  return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Cuisine</FormLabel>
        <FormGroup>
            {allCuisines.map((cuisine) => (
                <FormControlLabel
                    key={cuisine}
                    control={
                        <Checkbox
                            checked={selectedCuisines[cuisine]}
                            onChange={() => handleCuisineChange(cuisine)}
                        />
                    }
                    label={cuisine}
                />
            ))}
        </FormGroup>
        <Button variant="outlined" onClick={handleClearSelection}>Clear Selection</Button>
    </FormControl>
  );
}

export default Filter;
