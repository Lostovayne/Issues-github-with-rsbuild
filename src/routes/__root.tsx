import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => "404 Not Found",
})

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
      <h1 className='text-2xl font-semibold' >
        Git Issues <small className='text-gray-500 text-base' >Seguimiento de problemas</small>
      </h1>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
    </>
  )
}
