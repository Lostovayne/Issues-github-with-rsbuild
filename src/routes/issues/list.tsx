import { createFileRoute, ErrorComponent } from "@tanstack/react-router";
import { IssueList } from "../../componentes/issues-list";
import { LabelPicker } from "../../componentes/label-picker";
import { Suspense } from "react";
import { sleep } from "../../helpers/sleep";
export const Route = createFileRoute("/issues/list")({
  component: RouteComponent,
  errorComponent: ErrorComponent,
});

function RouteComponent() {
  const labels = Route.useLoaderData(); // retorna la promesa resuelta
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList />
      </div>

      <div className="col-span-1 px-2">
        <Suspense fallback={<div>Loading...</div>}>
          <LabelPicker />
        </Suspense>
      </div>
    </div>
  );
}
