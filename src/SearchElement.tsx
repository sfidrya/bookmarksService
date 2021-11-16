import { ChangeEvent, FormEvent, useCallback } from 'react'; 
import { Box, FormLabel, FormControlLabel, InputAdornment, RadioGroup, Radio, TextField } from '@material-ui/core';
//import { styles } from '@material-ui/core/styles'; 
import SearchIcon from '@material-ui/icons/Search'; 

interface SearchBarProps {
  selectedRadioOption: string//"title" | "tags" | "link"
  searchTextValue: string
  setSelectedRadioOption: (arg0: string) => void
  handleSearchTextChange: (text: string) => void
}
export default function SearchBar({selectedRadioOption, searchTextValue, setSelectedRadioOption, handleSearchTextChange}: SearchBarProps) {

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleSearchTextChange(e.target.value)
  }, [handleSearchTextChange])
  
  const handleRadioChange = useCallback((e: ChangeEvent<{}>) => {
    if (!(e.target instanceof HTMLInputElement))  {
      return
    }
    const newValue = e.target.value; 
    setSelectedRadioOption(newValue === "tag" ? "tags" : newValue); 
  }, [setSelectedRadioOption])

  const handleSubmit = useCallback((e: FormEvent<HTMLElement>) => {
    e.preventDefault(); 
    if (document.activeElement instanceof HTMLInputElement) {
      document.activeElement.blur(); 
    }
  }, [])

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
        onChange={handleTextChange}
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
          value="title" 
          control={<Radio />} 
          label="title" 
          checked={selectedRadioOption === "title"}
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
          checked={selectedRadioOption === "tags"}
          onChange={handleRadioChange}
        />
      </RadioGroup>
    </Box>
  ) 
}