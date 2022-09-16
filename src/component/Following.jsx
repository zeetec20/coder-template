import { HStack, Image, chakra, VStack } from "@chakra-ui/react"
import users from "data/users"
import moment from "moment"
import { FaUserFriends } from "react-icons/fa"
import Color from "utils/color"
import FontSize from "utils/fontSize"
import 'styles/components/following.scss'
import { FiArrowRight } from "react-icons/fi"

const Following = () => {
    const timeFromNow = () => moment().subtract(Math.floor(Math.random() * 12), 'month').fromNow(true)
    const followingAccount = users.filter(user => user.id !== 1).map(user => ({ ...user, lastUpdate: timeFromNow() }))

    return (
        <VStack
            bg='white'
            rounded='lg'
            spacing='10px'
            alignItems='start'
            py='15px'
            px='15px'
            w='100%'
            mb='30px !important'
            className="following"
            position='relative'
        >
            <HStack
                position='absolute'
                bg={Color.main}
                pl='13px' pr='15px'
                py='3px'
                rounded='full'
                right='10px'
                top='-10px'
                cursor='pointer'
            >
                <FiArrowRight color='white' size='17px' />
                <chakra.h1 fontSize={FontSize.low2} color='white' fontWeight='bold'>More Following</chakra.h1>
            </HStack>
            <HStack className="title">
                <chakra.div position='relative'>
                    <chakra.div
                        position='absolute'
                        rounded='full'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        w='17px'
                        h='17px'
                        right='-6px'
                        top='-6px'
                        bg={Color.main}
                        className='count-following'
                    >
                        <chakra.p color='white' fontSize={FontSize.low3} fontWeight='bold'>{followingAccount.length}</chakra.p>
                    </chakra.div>
                    <chakra.div h='35px' w='35px' display='flex' justifyContent='center' alignItems='center' rounded='lg' border={`solid 1px ${Color['grey-50']}`} bg={Color.grey2}>
                        <FaUserFriends size='18px' color={Color.main} />
                    </chakra.div>
                </chakra.div>
                <chakra.h1 fontSize={FontSize.medium} color={Color.black} fontWeight='bold'>Following Account</chakra.h1>
            </HStack>

            <chakra.div mt='5px !important'>
                {followingAccount.slice(0, 10).map((data, index) => <Account key={index} profile={data.profile} name={data.name} lastUpdate={data.lastUpdate} />)}
            </chakra.div>
        </VStack>
    )
}

const Account = ({ profile, name, lastUpdate }) => {
    return (
        <HStack w='full' mt='15px !important' cursor='pointer'>
            <Image display='inline' src={profile} fit='cover' h='38px' w='38px' minW='38px' rounded='lg' />
            <VStack spacing='-2px' alignItems='start' ml='10px !important'>
                <chakra.h1
                    fontSize={FontSize.low}
                    fontWeight='bold'
                    color={Color.black}
                >
                    {name}
                </chakra.h1>
                <chakra.h1
                    fontSize={FontSize.low2}
                    color={Color.black}
                >
                    {lastUpdate} ago last updated
                </chakra.h1>
            </VStack>
        </HStack>
    )
}

export default Following