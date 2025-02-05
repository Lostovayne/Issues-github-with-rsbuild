import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/issues/issue/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/issues/issue/$id"!</div>
}
