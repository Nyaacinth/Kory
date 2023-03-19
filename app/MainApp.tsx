import { FunctionComponent, StrictMode } from "react"
import { createMemoryRouter, RouterProvider } from "react-router-native"
import { Home } from "./screens/Home"

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
