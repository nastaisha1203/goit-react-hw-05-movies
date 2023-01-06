import { useState } from 'react';
import {
  SearchBar,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searhQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searhQuery.trim() === '') {
      return toast.error('Enter a valid name!');
    }
    onSubmit(searhQuery.toLowerCase());
    setSearchQuery('');
  };
  const onChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" value={searhQuery} onChange={onChange} />
        <SearchButton type="submit" aria-label="Search">
          <BsSearch />
        </SearchButton>
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;
