import React, { useState } from 'react'
import {
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/core'
import SearchResults from './SearchResults'

const SearchBar = ({menuOpen}) => {
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
        display="block"
        m={2}
        transition="transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99), -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99)"
        transform={ [menuOpen ? "scale(1) translateY(0px)" : "scale(.95) translateY(-10px)", menuOpen ? "scale(1) translateY(0px)" : "scale(.95) translateY(-10px)", "scale(1) translateY(0px)" ]}
        zIndex="1"
        style={{
          transitionDelay:".1s"
        }}
      >
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          type="text"
          onFocus={() => searchToggle(true)}
          onKeyUp={handleSearch}
          placeholder="Search..."
          bg="transparent"
          color="gray.200"
          fontSize={["16px","16px","sm"]}
          transition="all .3s"
          border="none"
          outline="none"
          w={["100%","100%",isSearchOpen ? '210px' : '110px']}
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
