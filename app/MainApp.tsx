import { FunctionComponent, StrictMode } from "react"
import { RouterProvider, createMemoryRouter } from "react-router-native"
import { Home } from "./views/Home"

const router = createMemoryRouter([
    {
        path: "/",
        element: <Home />
    }
])

export const MainApp: FunctionComponent = () => {
    return (
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
}
