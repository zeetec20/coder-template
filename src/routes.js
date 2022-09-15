import LayoutPage from "./layouts/page"
import Home from "./pages/home"

const routes = [
    {
        path: '/',
        layout: LayoutPage,
        component: Home
    },
]

export default routes