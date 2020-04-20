import React from 'react';

export const SearchField = ({placeholder, handleChange}) => (
  <span className="search">
    <input 
        className="form-control ng-pristine ng-valid"
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
        style={{marginTop: '2px', borderColor: '#d1d7de', height: '28px'}}
    />
  </span>
)
export default SearchField;