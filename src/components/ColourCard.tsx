import { Box, Heading, HStack, IconButton, Spacer, Stack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { FaFolder } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

interface Props {
    colour: string
    children: string
}

const ColourCard = ({ colour, children }: Props) => {
    return (
        <Stack

            bgColor={colour}
            w='224px'
            h='176px'
            p="24px"
            borderRadius='12px'>

            <HStack>
                <Icon
                    as={FaFolder}
                    w='40px'
                    h='32px'
                    color='#F1ACD1' />
                <Spacer />
                <IconButton
                    w='22px'
                    variant='ghost'
                    aria-label='folders'
                    icon={<BsThreeDots />} />
            </HStack>
            <Spacer />

            <Heading as='h6' fontSize='20px'>
                {children}
            </Heading>
        </Stack>
    )
}

export default ColourCard;