import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router'

//Suspense Loader
import SuspenseLoader from '../components/suspenseLoader'

//Layouts
import ClientLayout from '../layouts/ClientLayout'

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    )

//General Pages
const Landing = Loader(lazy(() => import('../content/landing')))
const About = Loader(lazy(() => import('../content/about')))
const Services = Loader(lazy(() => import('../content/services')))
const Contact = Loader(lazy(() => import('../content/contact')))

const routes: RouteObject[] = [
    {
        path: '',
        element: <ClientLayout />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]

export default routes