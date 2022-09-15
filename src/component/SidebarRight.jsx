import { VStack } from '@chakra-ui/react'
import Events from './Events'
import Following from './Following'

const SidebarRight = ({ width, isMobile = false }) => {
    return (
        <VStack
            mt='30px'
            w={width}
            top={'0px'}
            bottom={0}
            spacing='30px'
            right={0}
            px='30px'
            id='sidebar-right'
            className={isMobile ? 'mobile' : undefined}
        >
            <Events />
            <Following />
        </VStack>
    )
}

export default SidebarRight