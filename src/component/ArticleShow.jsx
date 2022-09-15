import { HStack, VStack, chakra } from "@chakra-ui/react"
import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { GoListOrdered } from "react-icons/go"
import { RiUserStarFill } from "react-icons/ri"
import Color from "utils/color"
import FontSize from "utils/fontSize"


const ArticleShow = () => {
    const [optionSelected, setOptionSelected] = useState(0)

    return (
        <VStack
            bg='white'
            rounded='lg'
            spacing='10px'
            py='15px'
            px='15px'
            w='100%'
        >
            <ArticleOptionShow
                icon={<GoListOrdered size='22px' color={Color.main} />}
                title='Newest and Recent'
                description='Show article latest updated'
                isSelected={optionSelected === 0}
                onClick={() => setOptionSelected(0)}
            />
            <ArticleOptionShow
                icon={<FaStar size='22px' color={Color.main} />}
                title='Popular of the day'
                description='Show article with most reader'
                isSelected={optionSelected === 1}
                onClick={() => setOptionSelected(1)}
            />
            <ArticleOptionShow
                icon={<RiUserStarFill size='22px' color={Color.main} />}
                title='Following'
                description='Show article from your following'
                isSelected={optionSelected === 2}
                onClick={() => setOptionSelected(2)}
            />
        </VStack>
    )
}

const ArticleOptionShow = ({ icon, title, description, onClick, isSelected }) => {
    return (
        <HStack
            w='full'
            onClick={onClick}
            bg={isSelected ? Color.grey2 : 'unset'}
            py='7px'
            rounded='lg'
            px='10px'
            cursor='pointer'
            border={isSelected ? `solid 1px ${Color['grey-50']}` : 'solid 1px transparent'}
        >
            <chakra.div
                h='35px'
                minW='35px !important'
                w='35px !important'
                display='flex'
                justifyContent='center'
                alignItems='center'
                rounded='lg'
                border={isSelected ? 'none' : `solid 1px ${Color['grey-50']}`}
                bg={Color.grey2}
            >
                {icon}
            </chakra.div>

            <chakra.div>
                <chakra.h1 fontSize={FontSize.low2} fontWeight='bold' color={Color.black}>{title}</chakra.h1>
                <chakra.p fontSize={FontSize.low2} color={Color.black}>{description}</chakra.p>
            </chakra.div>
        </HStack>
    )
}

export default ArticleShow