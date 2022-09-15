import { Button } from "@chakra-ui/react"
import Color from "utils/color"

const ButtonIcon = ({ width = '47px', height = '45px', children, onClick = undefined, ...props }) => {
    return (
        <Button
            bg={Color.grey2}
            borderRadius={'lg'}
            height={height}
            p='0'
            minW={width}
            maxW={width}
            border={`1.5px solid ${Color["grey-50"]}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    )
}

export default ButtonIcon