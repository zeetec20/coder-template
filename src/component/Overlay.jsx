import { chakra } from '@chakra-ui/react'
import { useEffect } from 'react'
import Color from 'utils/color'
import 'styles/components/overlay.scss'

const Overlay = ({ children, onClick = undefined }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'auto'
    }, [])

    const handlerClick = event => {
        if (event.target === event.currentTarget) onClick()
    }

    return (
        <chakra.div
            position='absolute'
            zIndex={5000}
            bg={Color['black-50']}
            h='100vh'
            w='100vw'
            onClick={handlerClick}
            className='overlay'
        >
            {children}
        </chakra.div>
    )
}

export default Overlay