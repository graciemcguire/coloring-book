import React from 'react'

const SearchBar = props => {
  const { value, changeHandler } = props
  return(
    <form>
      <input
        className="form"
        type="text"
        value={ value }
        onChange={ changeHandler }
        placeholder= 'Search Images'
      />
    </form>
  )
}
 export default SearchBar;
