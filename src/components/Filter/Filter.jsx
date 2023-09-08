import React from 'react';
import { Input, Label, Wrapp } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(addFilter(event.target.value.trim()));
  };

  return (
    <Wrapp>
      <Label>
        Find contacts by name
        <Input type="text" onChange={changeFilter} />
      </Label>
    </Wrapp>
  );
};
