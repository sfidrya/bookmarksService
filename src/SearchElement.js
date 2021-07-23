import { useCallback, useState } from 'react'; 
import { Box, FormLabel, FormControlLabel, InputAdornment, RadioGroup, Radio, TextField } from '@material-ui/core';
//import { styles } from '@material-ui/core/styles'; 
import SearchIcon from '@material-ui/icons/Search'; 

export default function SearchBar({handleSearchSubmit}) {
  const [selectedRadioOption, setSelectedRadioOption] = useState("name"); 
  const [searchTextValue, setSearchTextValue] = useState(""); 

  const handleSearchTextChange = useCallback((e) => {
    setSearchTextValue(e.target.value); 
  }, [])
  
  const handleRadioChange  = useCallback((e) => {
    setSelectedRadioOption(e.target.value); 
  }, [])

  return(
    <Box component="form" onSubmit={handleSearchSubmit}>
      <TextField
        variant="outlined"
        InputProps={{
          startAdornment: 
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>,
        }}
        size="small"
        name="searchText"
        type="search"
        placeholder="Search"
        value={searchTextValue}
        fullWidth={true}
        onChange={handleSearchTextChange}
      />
      <FormLabel component="legend">
        Search by
      </FormLabel>
      <RadioGroup
        row
        aria-label="search type"
        name="radio-buttons-group"
      >
        <FormControlLabel 
          value="name" 
          control={<Radio />} 
          label="name" 
          checked={selectedRadioOption === "name"}
          onChange={handleRadioChange}
        />
        <FormControlLabel 
          value="link" 
          control={<Radio />} 
          label="link" 
          checked={selectedRadioOption === "link"}
          onChange={handleRadioChange}
        />
        <FormControlLabel 
          value="tag" 
          control={<Radio />} 
          label="tag" 
          checked={selectedRadioOption === "tag"}
          onChange={handleRadioChange}
        />
      </RadioGroup>
    </Box>
  ) 
}