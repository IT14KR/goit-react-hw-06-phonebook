import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Wrapp } from './Filter.styled';

function Filter({ value, onChangeFilter }) {
  return (
    <Wrapp>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Wrapp>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
