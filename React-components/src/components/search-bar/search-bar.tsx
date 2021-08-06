import React from 'react';
import './style.scss';

const SearchBar:React.FC = (): JSX.Element => (
  <form className="search-bar-form" action="" method="get">
    <input className="search-bar-input"
      type="search"
      placeholder="Search bar"
      name="search" />
    <button className="search-button" type="submit" />
  </form>
);

export default SearchBar;
