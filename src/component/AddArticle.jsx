import { HStack, chakra } from "@chakra-ui/react"
import { FaPencilAlt } from "react-icons/fa"
import Color from "utils/color"
import FontSize from "utils/fontSize"
import ButtonIcon from "./ButtonIcon"
import 'styles/components/add_article.scss'

const AddArticle = () => {
    return (
        <HStack
            bg='white'
            borderRadius='lg'
            justifyContent='space-between'
            className="add_article"
            py='10px'
            pl='15px'
            pr='10px'
        >
            <chakra.h1
                fontSize={FontSize.low}
                fontWeight='bold'
                w='full'
                color={Color["black-40"]}
            >
                Let's share what your learn...
            </chakra.h1>
            <ButtonIcon width='40px' height='40px' className='button-write'>
                <FaPencilAlt size={'18px'} color={Color.main} />
            </ButtonIcon>
        </HStack>
    )
}

export default AddArticle