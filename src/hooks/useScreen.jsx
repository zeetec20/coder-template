const { useState, useEffect } = require("react")

/**
 * @returns {[number, number]}
 */
const useScreen = () => {
    const [screen, setScreen] = useState([window.innerWidth, window.innerHeight])
    const handle = () => setScreen([window.innerWidth, window.innerHeight])
    
    useEffect(() => {
        window.addEventListener('resize', handle)
        return () => window.addEventListener('resize', handle)
    }, [])

    return screen
}

export default useScreen