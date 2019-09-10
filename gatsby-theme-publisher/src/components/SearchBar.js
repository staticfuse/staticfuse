import React, { useState } from "react"
import {
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core"
import SearchResults from "./SearchResults"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const [isSearchOpen, setSearchOpen] = useState(false)

  const handleSearch = event => {
    if (event.target.value.length >= 3) {
      console.log(event.target.value)
      setSearchValue(event.target.value)
    }
  }

  const searchToggle = bool => {
    setSearchOpen(bool)
  }

  return (
    <>
      <InputGroup
        size="sm"
        position="relative"
        bg="rgba(255,255,255,.1)"
        rounded="full"
      >
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          type="text"
          onFocus={() => searchToggle(true)}
          onKeyUp={handleSearch}
          placeholder="Search..."
          bg="transparent"
          color="gray.200"
          w="110px"
          fontSize="sm"
          transition="all .3s"
          border="none"
          outline="none"
          w={isSearchOpen ? "210px" : "110px"}
        />
        <SearchResults searchTerm={searchValue} showResults={isSearchOpen} />
        <InputRightElement
          children={
            isSearchOpen ? (
              <Icon
                name="close"
                size="10px"
                color="gray.500"
                onClick={() => searchToggle(false)}
              />
            ) : null
          }
        />
      </InputGroup>
    </>
  )
}

export default SearchBar
