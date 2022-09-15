import { HStack, VStack, chakra } from "@chakra-ui/react"
import { HiHashtag } from "react-icons/hi"
import Color from "utils/color"
import FontSize from "utils/fontSize"
import { numberWithComma } from "utils/helper"
import 'styles/components/popular_tags.scss'

const PopularTags = () => {
    return (
        <VStack
            bg='white'
            rounded='lg'
            spacing='10px'
            alignItems='start'
            py='15px'
            px='15px'
            w='100%'
            className="popular-tags"
        >
            <HStack className="title" m={'0 !important'}>
                <chakra.div
                    h='35px'
                    w='35px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center' rounded='lg'
                    border={`solid 1px ${Color['grey-50']}`}
                    bg={Color.grey2}
                >
                    <HiHashtag
                        size='18px'
                        color={Color.main}
                    />
                </chakra.div>
                <chakra.h1
                    fontSize={FontSize.medium}
                    fontWeight='bold'
                    color={Color.black}
                >
                    Popular Tags
                </chakra.h1>
            </HStack>

            <chakra.div mt='5px !important'>
                <Tag index={1} tag='Python' countArticle={200000} />
                <Tag index={2} tag='ComputerScience' countArticle={400000} />
                <Tag index={3} tag='Angular' countArticle={450000} />
                <Tag index={4} tag='Javascript' countArticle={670000} />
                <Tag index={5} tag='Express' countArticle={100000} />
                <Tag index={6} tag='Flutter' countArticle={130000} />
                <Tag index={7} tag='React' countArticle={190000} />
                <Tag index={8} tag='Vue' countArticle={280000} />
                <Tag index={9} tag='GO' countArticle={250000} />
                <Tag index={10} tag='Dart' countArticle={490000} />
            </chakra.div>
        </VStack>
    )
}

const Tag = ({ index, tag, countArticle }) => {
    return (
        <HStack w='full' rounded='lg' mt='15px !important' border={'solid 1px transparent'}>
            <chakra.div
                h='30px'
                w='30px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                rounded='lg'
                border={`solid 1px ${Color['grey-50']}`}
                bg={Color.grey2}
            >
                <chakra.h1 fontSize={FontSize.low2} color={Color.main} fontWeight='bold'>{index}</chakra.h1>
            </chakra.div>

            <chakra.div>
                <chakra.h1 fontSize={FontSize.low2} color={Color.black} fontWeight='black'>#{tag}</chakra.h1>
                <chakra.p
                    fontSize={FontSize.low2}
                    color={Color.black}
                >
                    {numberWithComma(countArticle)} Article by this tag
                </chakra.p>
            </chakra.div>
        </HStack>
    )
}

export default PopularTags