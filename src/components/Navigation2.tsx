import { Box, VStack, List, ListItem, ListIcon, Heading, Spacer, GridItem } from '@chakra-ui/react';
import { CalendarIcon, ChatIcon } from '@chakra-ui/icons';
import AppIcon from '../utils/AppIcon'

const links = [
  { name: "dashboard", icon: <CalendarIcon /> },
  { name: "lesson", icon: <CalendarIcon /> },
  { name: "calender", icon: <CalendarIcon /> },
  { name: "chat", icon: <ChatIcon /> },
]


const Navigation = () => {
  return (
    <GridItem colSpan={1} rowSpan={6}>
      <VStack
        py={4}
        // colorScheme='edmused'
        bg="#5C5C5C"
        minHeight="100vh"
        borderRightRadius="28px"
      // w='237px'
      >

        <Box my={12}>
          <AppIcon icon='edmused' />
          <Heading ml={2} as='h5' size='sm' fontSize="14px" display="inline-block" color="white">Edmused</Heading>
        </Box>

        <List spacing={8} color="white" mt={8}>
          {
            links.map((link, i) => {
              return (
                <ListItem
                  key={i}
                  px={10}
                  py={2}
                  _hover={{
                    background: "white",
                    color: "black"
                  }}
                  borderLeftRadius="20px"
                  color="white"  >
                  <ListIcon as={() => link.icon} />
                  <Heading
                    ml={2}
                    as='h5'
                    size='sm'
                    fontSize="14px"
                    display="inline-block"
                    textTransform="capitalize"
                  >
                    {link.name}
                  </Heading>
                </ListItem>
              )
            })
          }

        </List>

        <Spacer />
        <Box
          px={10}
          py={2}
        >
          <Heading
            _hover={{
              background: "white",
              color: "black"
            }}
            borderLeftRadius="20px"
            color="white"
            mb={10}
            ml={2}
            as='h5'
            size='sm'
            fontSize="14px"
            display="inline-block"
            textTransform="capitalize"
          >
            <ChatIcon m={2} />
            Settings
          </Heading>
        </Box>
      </VStack>

    </GridItem>
  )
}

export default Navigation;