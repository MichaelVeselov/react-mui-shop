import { TextField } from '@mui/material';

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label='search'
      variant='standard'
      fullWidth
      sx={{ mb: '1.5rem' }}
      type='search'
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
