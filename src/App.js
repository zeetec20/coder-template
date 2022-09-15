import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from './routes'

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map(route => <Route path={route.path} element={route.layout ? <route.layout><route.component /></route.layout> : <route.component />} />)
                    }
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App