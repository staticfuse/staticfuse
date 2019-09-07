import React from "react"
import {Heading} from "@chakra-ui/core"

const HeaderArchive = ({ name }) => (
  <header className="page-header">
    <Heading
      className="archive-title"
      size='xs'
      textTransform="uppercase"
      color="gray.400"
      borderBottom="1px solid #eee"
      pb={2}
      mb={2}
      mt={2}
      fontWeight={1}
    >
      {name}
    </Heading>
  </header>
)

export default HeaderArchive
