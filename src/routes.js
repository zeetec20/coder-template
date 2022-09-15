import LayoutPage from "./layouts/page"
import Home from "./pages/home"
import Test from "./pages/test"

const routes = [
    {
        path: '/',
        layout: LayoutPage,
        component: Home
    },
    {
        path: '/test',
        component: Test
    }
]

export default routes