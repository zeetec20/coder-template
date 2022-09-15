import { VStack, chakra } from '@chakra-ui/react'
import ArticleShow from './ArticleShow'
import PopularTags from './PopularTags'
import SidebarRight from './SidebarRight'

const SidebarLeft = ({ sidebar_left_only, width, id, isMobile = false }) => {
    return (
        <chakra.div display={'flex'} flexDirection='column'>
            <VStack
                w={width}
                overflow='hidden'
                bottom={0}
                spacing='30px'
                mt='30px'
                id={id}
                px='30px'
                className={isMobile ? 'mobile' : undefined}
            >
                <ArticleShow />
                <PopularTags />
            </VStack>
            {sidebar_left_only && <SidebarRight
                width={width}
                id={id}
            />}
        </chakra.div>
    )
}

export default SidebarLeft