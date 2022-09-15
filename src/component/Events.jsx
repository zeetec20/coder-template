
import { chakra, HStack, Image, VStack } from '@chakra-ui/react'
import events from 'data/events'
import moment from 'moment'
import { BsCalendar2EventFill } from 'react-icons/bs'
import { FiArrowRight } from 'react-icons/fi'
import Color from 'utils/color'
import FontSize from 'utils/fontSize'
import organizerImage from 'assets/organizer.png'
import 'styles/components/events.scss'

const Events = () => {
    const listEvent = events.slice(0, 2).map(event => {
        const date = moment(event.date, 'DD-MM')
        return {
            ...event,
            month: date.format('MMM'),
            date: date.format('DD')
        }
    })

    return (
        <VStack
            bg='white'
            rounded='lg'
            spacing='10px'
            position='relative'
            alignItems='start'
            py='15px'
            px='15px'
            w='full'
            cursor='pointer'
            className='events'
        >
            <HStack
                position='absolute'
                bg={Color.main}
                pl='13px' pr='15px'
                py='3px'
                rounded='full'
                right='10px'
                top='-10px'
                ursor='pointer'
            >
                <FiArrowRight color='white' size='17px' />
                <chakra.h1 fontSize={FontSize.low2} color='white' fontWeight='bold'>More Event</chakra.h1>
            </HStack>

            <HStack m={'0 !important'} className='title'>
                <chakra.div
                    h='35px'
                    w='35px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    rounded='lg'
                    border={`solid 1px ${Color['grey-50']}`}
                    bg={Color.grey2}
                >
                    <BsCalendar2EventFill fontSize='18px' color={Color.main} />
                </chakra.div>
                <chakra.h1
                    fontSize={FontSize.medium}
                    fontWeight='bold'
                    display='block'
                    color={Color.black}
                    w='min-content'
                >
                    Events
                </chakra.h1>
            </HStack>

            <VStack w='full' mt='5px !important'>
                {listEvent.map((event, index) => <Event key={index} image={event.banner} {...event} />)}
            </VStack>
        </VStack>
    )
}

const Event = ({ month, date, image, title, organizer, place, tags }) => {
    return (
        <VStack w='full' mt='15px !important'>
            <chakra.div w='full' position='relative'>
                <chakra.div position='absolute' zIndex='2' bg={Color.grey2} m='7px' px='6px' rounded='full'>
                    <chakra.p fontSize={FontSize.low3} color={Color.black} fontWeight='bold'>{place}</chakra.p>
                </chakra.div>
                <Image src={image} height='75px' w='full' fit='cover' rounded='lg' />
            </chakra.div>
            <HStack w='full' alignItems='center'>
                <VStack
                    height='full'
                    spacing='5px'
                    justifyContent='center'
                    bg={Color.grey2}
                    px='5px'
                    rounded='lg'
                    border={`solid 1px ${Color['grey-50']}`}
                >
                    <chakra.h1 fontWeight='extrabold' mt='-5px' color={Color.black} fontSize={FontSize.low2}>{month}</chakra.h1>
                    <chakra.h1 fontWeight='black' color={Color.main} fontSize={FontSize.medium}>{date}</chakra.h1>
                </VStack>
                <chakra.div w='full'>
                    <chakra.h1 fontSize={FontSize.low} fontWeight='bold' color={Color.black} mt='5px'>{title}</chakra.h1>
                    <HStack>
                        <Image src={organizerImage} h='20px' w='20px' fit='cover' border={`solid 1px ${Color['grey-50']}`} rounded='full' />
                        <chakra.h1 fontSize={FontSize.low2} ml='4px !important' color={Color.black} fontWeight='medium'>{organizer}</chakra.h1>
                    </HStack>

                    <chakra.div mt='3px' w='full'>
                        <Tags tags={tags} />
                    </chakra.div>
                </chakra.div>
            </HStack>
        </VStack>
    )
}

const Tags = ({ tags }) => tags.map((tag, index) => (
    <chakra.div key={index} display='inline-block' py='0.7px' px='10px' bg={Color.grey2} rounded='full' w='min-content' mr='5px'>
        <chakra.p color={Color.main} fontSize={FontSize.low3} fontWeight='bold' whiteSpace='nowrap'>{tag}</chakra.p>
    </chakra.div>
))

export default Events