import { Button, chakra, HStack, Image } from "@chakra-ui/react"
import Color from "utils/color"
import FontSize from "utils/fontSize"
import { IoMdHeart, IoIosTime } from 'react-icons/io'
import { BsBookmark, BsBookmarkFill, BsChatFill } from 'react-icons/bs'
import { useState } from "react"
import users from "data/users"
import { timestamptToMoment } from "utils/helper"
import 'styles/components/article.scss'

const Article = ({ user, title, countLike, timeRead, banner, tags, createdAt, ...props }) => {
    const [bookmark, setBookmark] = useState(false)
    const Bookmark = props => bookmark ? <BsBookmarkFill {...props} /> : <BsBookmark {...props} />
    const userData = users.filter(data => data.id === user)[0]

    return (
        <chakra.div
            rounded='lg'
            bg='white'
            overflow='hidden'
            mt='30px' {...props}
            cursor='pointer'
            className='article'
        >
            {banner && <Image className="banner" src={banner} h='250px' w='full' fit='cover' />}
            <chakra.div px='75px' className='wrap'>
                <HStack mt='20px' justifyContent='space-between'>
                    <HStack className="profile">
                        <Image src={userData.profile} fit='cover' rounded='full' h='38px' w='38px' />
                        <chakra.div>
                            <chakra.h1 fontSize={FontSize.low} fontWeight='bold' color={Color.black} className='name'>{userData.name}</chakra.h1>
                            <chakra.h1 fontSize={FontSize.low2} color={Color.black} className='date'>{timestamptToMoment(createdAt).format('MMM DD')} ({timestamptToMoment(createdAt).fromNow()})</chakra.h1>
                        </chakra.div>
                    </HStack>

                    <Button
                        ml='10px'
                        bg='white'
                        height='35px !important'
                        p='0'
                        w='35px !important'
                        minWidth='35px !important'
                        border={`1px solid ${Color["grey-50"]}`}
                        onClick={() => setBookmark(!bookmark)}
                        className='bookmark'
                    >
                        <Bookmark size='20px' color={Color.main} />
                    </Button>
                </HStack>

                <chakra.h1
                    fontSize={FontSize.extraLarge}
                    fontWeight='bold'
                    mt='15px' l
                    ineHeight='shorter'
                    color={Color.black}
                    className='title'
                >
                    {title}
                </chakra.h1>

                <chakra.div mt='5px'>
                    {tags.map((tag, index) => <ArticleTag key={index} tag={tag} />)}
                </chakra.div>

                <HStack mb='20px' mt='25px' justifyContent='space-between'>
                    <HStack spacing='25px'>
                        <HStack spacing='5px' className="likes">
                            <IoMdHeart size='18px' color={Color["black-50"]} />
                            <chakra.h1 fontSize={FontSize.low3} fontWeight='bold' color={Color["black-50"]}>{countLike} Likes</chakra.h1>
                        </HStack>
                        <HStack spacing='5px' className="comments">
                            <BsChatFill size='15px' color={Color["black-50"]} />
                            <chakra.h1 fontSize={FontSize.low3} fontWeight='bold' color={Color["black-50"]}>{timeRead} Comments</chakra.h1>
                        </HStack>
                    </HStack>
                    <HStack spacing='5px' className="min-read">
                        <IoIosTime size='18px' color={Color["black-50"]} />
                        <chakra.h1 fontSize={FontSize.low3} fontWeight='bold' color={Color["black-50"]}>{timeRead} min read</chakra.h1>
                    </HStack>
                </HStack>
            </chakra.div>
        </chakra.div>
    )
}

const ArticleTag = ({ tag }) => {
    return (
        <chakra.div bg={Color.grey2} p='5px' rounded='md' mr='5px' display='inline' className="tag">
            <chakra.p display='inline' fontSize={FontSize.low2} fontWeight='bold' color={Color.main}>#{tag}</chakra.p>
        </chakra.div>
    )
}

export const ArticleOnBookmark = ({ user, title, tags, createdAt, ...props }) => {
    const userData = users.filter(data => data.id === user)[0]

    return (
        <chakra.div
            bg='white'
            overflow='hidden'
            mt='0 !important'
            py='10px !important' 
            {...props}
            cursor='pointer'
            w='full'
            _hover={{
                backgroundColor: Color["black-10"],
                transition: 'background-color 0.3s'
            }}
        >
            <chakra.div px='15px' className='wrap'>
                <HStack justifyContent='space-between'>
                    <HStack>
                        <Image src={userData.profile} fit='cover' rounded='full' h='35px' w='35px' />
                        <chakra.div>
                            <chakra.h1 fontSize={FontSize.low2} fontWeight='bold' color={Color.black} className='name'>{userData.name}</chakra.h1>
                            <chakra.h1 fontSize={FontSize.low3} color={Color.black} className='date'>{timestamptToMoment(createdAt).format('MMM DD')} ({timestamptToMoment(createdAt).fromNow()})</chakra.h1>
                        </chakra.div>
                    </HStack>
                </HStack>

                <chakra.h1
                    fontSize={FontSize.low}
                    fontWeight='bold'
                    mt='15px' l
                    ineHeight='shorter'
                    color={Color.black}
                    className='title'
                >
                    {title}
                </chakra.h1>
            </chakra.div>
        </chakra.div>
    )
}

export default Article