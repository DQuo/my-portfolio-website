import { Flex, HStack, Link, Text, Icon, useMediaQuery, Spacer, IconButton, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Drawer, useDisclosure, VStack, Divider } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {GiHamburgerMenu} from 'react-icons/gi';


const navLinks = [
  { name: 'About', ref: '#about' },
  { name: 'Skills', ref: '#skills' },
  { name: 'Projects', ref: '#projects' },
  { name: 'Contact Me', ref: '#contact'}
];

export default function Header() {
  const [isLargerThan700px] = useMediaQuery("(min-width: 700px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  return (
    <Flex as='header' justifyContent='space-between' p={4} align='center'>

      { isLargerThan700px ? (
        <Text fontWeight='semibold' fontSize='2xl' color='blue.200'>Portfolio</Text>
      ) : (
        <IconButton
          ref={btnRef}
          icon={<Icon as={GiHamburgerMenu} />}
          onClick={onOpen}
        />
      )}

      <Spacer />

      { isLargerThan700px ? (
        <HStack as='nav' fontWeight={'extrabold'} spacing={4} color='gray.500' mr={10}>
          { navLinks.map((link, idx) => {
              return (
                <Link key={idx} href={link.ref}>{link.name}</Link>
              );
          })}
        </HStack>
      ) : (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
            <VStack as='nav' fontWeight={'extrabold'} fontSize='2xl' spacing={4} color='gray.500' mt={10}>
              { navLinks.map((link, idx) => {
                  return (
                    <Fragment key={idx}>
                      <Link href={link.ref}>{link.name}</Link>
                      <Divider />
                    </Fragment>
                  );
              })}
            </VStack>
            </DrawerBody>
  
            <DrawerFooter>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    
      
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  )
}
