import { createFileRoute } from '@tanstack/react-router'
import { IssueList } from '../../componentes/issues-list'
import { LabelPicker } from '../../componentes/label-picker'

export const Route = createFileRoute('/issues/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList />
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  )
}
