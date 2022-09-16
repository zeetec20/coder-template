import {
    chakra,
    Image,
    Flex,
    HStack,
    useDisclosure,
    VStack,
    PopoverContent,
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverBody,
    Divider,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
} from "@chakra-ui/react"
import { AiFillBell, AiOutlinePoweroff, AiOutlineUser } from 'react-icons/ai'
import { BsCalendar2EventFill, BsFillCaretDownFill } from 'react-icons/bs'
import { FaSearch, FaUserFriends } from 'react-icons/fa'
import { MdCollectionsBookmark, MdOutlineClose } from 'react-icons/md'
import LogoImage from 'assets/logo.png'
import users from "data/users"
import Color from 'utils/color'
import fontSize from "utils/fontSize"
import ButtonIcon from "./ButtonIcon"
import 'styles/components/navbar.scss'
import variableScss from 'styles/_variables.scss'
import useScreen from "hooks/useScreen"
import { useEffect, useState } from "react"
import { HiHashtag } from "react-icons/hi"
import Overlay from "./Overlay"
import { FiChevronRight, FiHelpCircle } from "react-icons/fi"
import FontSize from "utils/fontSize"
import moment from "moment"
import { ArticleOnBookmark } from 'component/Article'
import articles from "data/articles"
import { IoIosExit, IoMdHelpCircle, IoMdSettings } from "react-icons/io"

const { screen_search_mode_button, screen_navbar_button_active, screen_profile_image_only } = variableScss

const Profile = ({ navbarSidebar, navbarSiebarTriger }) => {
    const PopoverProfile = ({ triger, mt }) => {
        const ButtonPopoverProfile = ({ icon, text }) => {
            return (
                <Button size='sm' w='full' justifyContent='start' bg='transparent' color={Color.black} m='0 !important' px='20px !important' height='3.2em' rounded='none'>
                    <chakra.div mr='10px'>
                        {icon}
                    </chakra.div>
                    {text}
                </Button>
            )
        }

        return (
            <Popover>
                <PopoverTrigger>
                    <chakra.div>
                        {triger}
                    </chakra.div>
                </PopoverTrigger>
                <PopoverContent mt={mt} shadow='lg' w='230px'>
                    <PopoverArrow />
                    <PopoverBody p='0'>
                        <VStack>
                            <Image
                                backgroundColor={Color["grey-50"]}
                                maxH={'45px'}
                                fit='cover'
                                maxW={'47px'}
                                minW={'47px'}
                                padding='2.5px'
                                rounded='lg'
                                mt='20px'
                                mb='5px'
                                src={user.profile}
                            />
                            <chakra.p
                                fontWeight={'bold'}
                                fontSize={fontSize.medium}
                                color={Color.black}
                                lineHeight='1em'
                            >
                                {user.name}
                            </chakra.p>
                            <chakra.p
                                fontWeight={'bold'}
                                fontSize={fontSize.low2}
                                color={Color["black-50"]}
                                lineHeight='1em'
                                mb='20px !important'
                            >
                                {user.as}
                            </chakra.p>

                            <Divider mt='0 !important' />
                            <ButtonPopoverProfile icon={<AiOutlineUser color={Color.black} />} text='My Account' />
                            <Divider mt='0 !important' />
                            <ButtonPopoverProfile icon={<FiHelpCircle color={Color.black} />} text='Help Center' />
                            <Divider mt='0 !important' />
                            <ButtonPopoverProfile icon={<AiOutlinePoweroff color={Color.black} />} text='Sign Out' />
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        )
    }

    const user = users[0]
    const [width] = useScreen()
    const [onlyImage, setOnlyImage] = useState(false)
    useEffect(() => {
        if (width <= screen_profile_image_only && !onlyImage) setOnlyImage(true)
        if (width >= screen_profile_image_only && onlyImage) setOnlyImage(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <chakra.div display={'flex'} alignItems='center' className="profile">
            {!navbarSidebar ? (
                onlyImage ? (
                    <PopoverProfile
                        mt='18px'
                        triger={
                            <Image
                                backgroundColor={Color["grey-50"]}
                                maxH={'45px'}
                                fit='cover'
                                maxW={'47px'}
                                minW={'47px'}
                                padding='2.5px'
                                rounded='lg'
                                src={user.profile}
                            />
                        }
                    />
                ) : (
                    <Image
                        backgroundColor={Color["grey-50"]}
                        maxH={'45px'}
                        fit='cover'
                        maxW={'47px'}
                        minW={'47px'}
                        padding='2.5px'
                        rounded='lg'
                        src={user.profile}
                    />
                )
            ) : (
                <Image
                    backgroundColor={Color["grey-50"]}
                    maxH={'45px'}
                    fit='cover'
                    maxW={'47px'}
                    minW={'47px'}
                    padding='2.5px'
                    rounded='lg'
                    src={user.profile}
                    onClick={navbarSiebarTriger}
                />
            )
            }
            <chakra.h1
                fontWeight={'bold'}
                whiteSpace='nowrap'
                textOverflow={'ellipsis'}
                overflow='hidden'
                maxW={'130px'}
                fontSize={fontSize.medium}
                ml='10px'
                mr='13px'
                color={Color.black}
            >
                {user.name}
            </chakra.h1>
            <PopoverProfile
                mt='33px'
                triger={
                    <BsFillCaretDownFill size='14px' color={Color.main} className='icon-dropdown' />
                }
            />
        </chakra.div>
    )
}

const Bookmark = () => {
    const articlesCom = articles.slice(1, 4).map((article, index) => {
        return (
            <>
                <Divider mt='0 !important' />
                <ArticleOnBookmark key={index} {...article} />
            </>
        )
    })

    return (
        <Popover>
            <PopoverTrigger>
                <chakra.div>
                    <ButtonIcon className='button-bookmark'>
                        <MdCollectionsBookmark color={Color.main} size='22px' />
                    </ButtonIcon>
                </chakra.div>
            </PopoverTrigger>
            <PopoverContent mt='17px' shadow='lg' w='350px'>
                <PopoverArrow />
                <PopoverBody p='0'>
                    <VStack>
                        <HStack justifyContent='space-between' w='full' h='45px' px='15px'>
                            <chakra.h1 fontSize={FontSize.medium} fontWeight='bold' color={Color.black}>
                                Bookmark
                            </chakra.h1>
                        </HStack>
                        {articlesCom}
                        <Divider mt='0 !important' />
                        <chakra.div h='45px' display='flex' alignItems='center' mt='0px !important'>
                            <chakra.h1 fontSize={FontSize.low} fontWeight='medium' color={Color.main} mt='0px' cursor='pointer'>
                                View All
                            </chakra.h1>
                        </chakra.div>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

const Notification = () => {
    const Notification = ({ user }) => {
        const date = moment().subtract(3, 'day').subtract(Math.floor(Math.random() * 24), 'hour').format('MMM DD HH:mm a')

        return (
            <HStack
                justifyContent='start'
                alignItems='center'
                w='full'
                px='20px'
                spacing='15px'
                py='8px !important'
                m='0 !important'
                cursor='pointer'
                _hover={{
                    backgroundColor: Color["black-10"],
                    transition: 'background-color 0.3s'
                }}
            >
                <Image src={user.profile} borderRadius='full' minW='40px !important' fit='cover' h='40px !important' />
                <VStack alignItems='start'>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='medium' color={Color["black-75"]}>
                        Congratulate <chakra.span fontWeight='semibold' color={Color.black}>{user.name}</chakra.span> has follow you
                    </chakra.h1>
                    <chakra.p fontSize={FontSize.low3} fontWeight='medium' lineHeight='1em' color={Color["black-75"]}>{date}</chakra.p>
                </VStack>
            </HStack>
        )
    }

    return (
        <Popover>
            <PopoverTrigger>
                <chakra.div>
                    <ButtonIcon className='button-notification'>
                        <AiFillBell color={Color.main} size='22px' />
                    </ButtonIcon>
                </chakra.div>
            </PopoverTrigger>
            <PopoverContent mt='17px' shadow='lg' w='250px'>
                <PopoverArrow />
                <PopoverBody p='0'>
                    <VStack>
                        <HStack justifyContent='space-between' w='full' h='45px' px='15px'>
                            <chakra.h1 fontSize={FontSize.medium} fontWeight='bold' color={Color.black}>
                                Notification
                            </chakra.h1>
                            <Button h='none' bg='transparent' px='7px' py='4px'>
                                <chakra.h1 fontSize={FontSize.low} fontWeight='medium' color={Color.main} cursor='pointer'>
                                    Clear
                                </chakra.h1>
                            </Button>
                        </HStack>
                        <Divider mt='0 !important' />
                        <Notification user={users[3]} />
                        <Divider mt='0 !important' />
                        <Notification user={users[4]} />
                        <Divider mt='0 !important' />
                        <Notification user={users[5]} />
                        <Divider mt='0 !important' />
                        <chakra.div h='45px' display='flex' alignItems='center' mt='0px !important'>
                            <chakra.h1 fontSize={FontSize.low} fontWeight='medium' color={Color.main} cursor='pointer'>
                                View All
                            </chakra.h1>
                        </chakra.div>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

const Search = ({ enableMinW = true }) => {
    return (
        <chakra.div
            px='15px'
            border={`1px solid ${Color["grey-50"]}`}
            bg={Color.grey2}
            height={'45px'}
            rounded='lg'
            margin={0}
            display='flex'
            alignItems='center'
            minW={enableMinW ? '450px' : undefined}
            className='search'
        >
            <chakra.input
                border={'none'}
                w='full'
                type='text'
                bg={'transparent'}
                fontWeight={'semibold'}
                placeholder="Type to Search"
                _placeholder={{
                    color: Color["black-50"]
                }}
                _focus={{ outline: 'none' }}
                pr='15px'
                spellCheck={false}
            />
            <ButtonIcon bg='white' width="32px" height="32px">
                <FaSearch size={'18px'} color={Color.main} />
            </ButtonIcon>
        </chakra.div>
    )
}

const SearchButton = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <>
            <ButtonIcon className='button-search' onClick={onOpen}>
                <FaSearch color={Color.main} size='20px' />
            </ButtonIcon>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW='none' w='80vw'>
                    <Search enableMinW={false} />
                </ModalContent>
            </Modal>
        </>
    )
}

const Logo = ({ height = 45, ...props }) => {
    return (
        <chakra.a display="flex" alignItems="center" className="logo" {...props}>
            <Image height={`${height}px`} rounded={'sm'} src={LogoImage} alt='' />
        </chakra.a>
    )
}

const Navbar = () => {
    const [searchActive, setSearchActive] = useState(true)
    const [buttonNavbarActive, setButtonNavbarActive] = useState(false)
    const mobileNav = useDisclosure();
    const [width] = useScreen()
    const { isOpen, onClose, onOpen } = useDisclosure()

    useEffect(() => {
        if (screen_search_mode_button >= width && searchActive) setSearchActive(false)
        if (screen_search_mode_button <= width && !searchActive) setSearchActive(true)
        if (screen_navbar_button_active >= width && !buttonNavbarActive) setButtonNavbarActive(true)
        if (screen_navbar_button_active <= width && buttonNavbarActive) setButtonNavbarActive(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <>
            {isOpen && <SidebarOnNavbar close={onClose} />}
            <chakra.div
                bg={'white'}
                w="full"
                px={{ base: '60px', sm: '60px' }}
                py={4}
                height={`${Navbar.height}px`}
                alignItems={'center'}
                display={'flex'}
                className='navbar'
            >
                <Flex alignItems='center' justifyContent="space-between" mx="auto" w={'full'}>
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Logo />
                        {searchActive && <Search />}
                    </HStack>

                    <HStack spacing={'15px'} w={buttonNavbarActive ? 'full' : undefined} justifyContent='space-between' display={mobileNav.isOpen ? "none" : "flex"} alignItems="center">
                        {!searchActive && <SearchButton />}
                        <HStack spacing='15px'>
                            <Bookmark />
                            <Notification />
                            <Profile navbarSidebar={buttonNavbarActive} navbarSiebarTriger={onOpen} />
                        </HStack>
                    </HStack>
                </Flex>
            </chakra.div>
        </>
    )
}
Navbar.height = 65

const SidebarOnNavbar = ({ close }) => {
    const user = users[0]

    return (
        <Overlay onClick={close}>
            <VStack bg='white' h='100vh' overflow='auto' w='250px' alignItems='start' className="sidebar-navbar">
                <HStack justifyContent='space-between' px='10px' py='10px !important' w='full' bg={Color.grey2}>
                    <Logo height={40} />
                    <ButtonIcon width="33px" height="33px">
                        <MdOutlineClose size='20px' color={Color.main} onClick={close} />
                    </ButtonIcon>
                </HStack>
                <Divider mt='0px !important' />

                <VStack w='full' alignItems='start' px='10px' my='20px !important'>
                    <Image
                        backgroundColor={Color["grey-50"]}
                        maxH={'70px'}
                        fit='cover'
                        maxW={'70px'}
                        minW={'70px'}
                        padding='2.5px'
                        rounded='lg'
                        mb='5px'
                        src={user.profile}
                    />
                    <HStack justifyContent='space-between' w='full' alignItems='center'>
                        <VStack alignItems='start'>
                            <chakra.h1
                                fontWeight={'bold'}
                                fontSize={fontSize.medium}
                                color={Color.black}
                                lineHeight='1em'
                            >
                                {user.name}
                            </chakra.h1>
                            <chakra.p
                                fontWeight={'bold'}
                                fontSize={fontSize.low2}
                                color={Color["black-50"]}
                                lineHeight='1em'
                            >
                                {user.as}
                            </chakra.p>
                        </VStack>
                        <ButtonIcon width="33px" height="33px" bg='white'>
                            <FiChevronRight size='20px' color={Color.main} />
                        </ButtonIcon>
                    </HStack>
                </VStack>

                <Divider mt='0 !important' />

                <HStack pl='10px' mt='20px !important'>
                    <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                        <FaUserFriends size='19px' color={Color["black-75"]} />
                    </chakra.div>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Following</chakra.h1>
                </HStack>
                <HStack pl='10px' mt='10px !important'>
                    <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                        <HiHashtag size='22px' color={Color["black-75"]} />
                    </chakra.div>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Tags</chakra.h1>
                </HStack>
                <HStack pl='10px' mt='10px !important'>
                    <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                        <BsCalendar2EventFill size='17px' color={Color["black-75"]} />
                    </chakra.div>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Event</chakra.h1>
                </HStack>
                <HStack pl='10px' mt='10px !important'>
                    <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                        <IoMdSettings size='22px' color={Color["black-75"]} />
                    </chakra.div>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Settings</chakra.h1>
                </HStack>
                <HStack pl='10px' mt='10px !important'>
                    <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                        <IoMdHelpCircle size='22px' color={Color["black-75"]} />
                    </chakra.div>
                    <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Help Center</chakra.h1>
                </HStack>

                <Divider mt='20px !important' />

                <VStack h='full' justifyContent='end' pb='10px'>
                    <HStack pl='10px' mt='10px !important'>
                        <chakra.div width='25px' height='25px' display='flex' justifyContent='center' alignItems='center'>
                            <IoIosExit size='22px' color={Color["black-75"]} />
                        </chakra.div>
                        <chakra.h1 fontSize={FontSize.low2} fontWeight='600' ml='7px !important' color={Color.black}>Sign Out</chakra.h1>
                    </HStack>
                </VStack>
            </VStack>
        </Overlay>
    )
}

export default Navbar