import Navbar from "component/Navbar"
import SidebarLeft from "component/SidebarLeft"
import SidebarRight from "component/SidebarRight"
import { chakra } from '@chakra-ui/react'
import Color from "utils/color"
import { memo, useEffect, useState } from "react"
import 'styles/layout_page.scss'
import useScreen from "hooks/useScreen"
import variableScss from 'styles/_variables.scss'

const LayoutPage = memo(({ children }) => {
    const [sidebarLeftOnlyActive, setSidebarLeftOnlyActive] = useState(false)
    const [width] = useScreen()
    const widthSidebarLeft = 20
    const widthSidebarRight = 22.5
    const {screen_sidebar_left_only} = variableScss
    
    useEffect(() => {
        if (screen_sidebar_left_only >= width && !sidebarLeftOnlyActive) setSidebarLeftOnlyActive(true)
        if (screen_sidebar_left_only <= width && sidebarLeftOnlyActive) setSidebarLeftOnlyActive(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <chakra.div bg={Color["blue-white"]} minH={'100vh'}>
            <Navbar />
            <chakra.div display={'flex'} w='full'>
                <SidebarLeft width={`${widthSidebarLeft}vw`} id='sidebar-left' sidebar_left_only={sidebarLeftOnlyActive} />
                <chakra.div width={`${100 - (widthSidebarLeft + widthSidebarRight)}%`} mt='30px' id='main-content'>
                    {children}
                </chakra.div>
                {!sidebarLeftOnlyActive && <SidebarRight width={`${widthSidebarRight}vw`} id='sidebar-right' />}
            </chakra.div>
        </chakra.div>
    )
})

export default LayoutPage