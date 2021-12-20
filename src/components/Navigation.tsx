import { Box, VStack, List, Button, ListItem, ListIcon, Heading } from '@chakra-ui/react';
import { CalendarIcon, ChatIcon, DragHandleIcon } from '@chakra-ui/icons';
import AppIcon from '../utils/AppIcon'
import { MdOutlineDashboard } from 'react-icons/md';

const links = [
    { name: "dashboard", icon: <CalendarIcon /> },
    { name: "lesson", icon: <CalendarIcon /> },
    { name: "calender", icon: <CalendarIcon /> },
    { name: "chat", icon: <ChatIcon /> },
]

const Navigation = () => {
    return (
        <VStack py={4} colorScheme='edmused' bg="edmused.500" minHeight="100vh" borderRightRadius="20">

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
        </VStack>
    )
}

export default Navigation