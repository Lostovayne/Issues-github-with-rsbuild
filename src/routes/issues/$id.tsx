import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/issues/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/issues/$id"!</div>
}
