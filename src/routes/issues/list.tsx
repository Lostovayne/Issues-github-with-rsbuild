import { IssueSuspense } from "@/issues/componentes/issue-suspense";
import { IssueList } from "@/issues/componentes/issues-list";
import { LabelPicker } from "@/issues/componentes/label-picker";
import { useIssues } from "@/issues/hooks/useIssues";

import { createFileRoute, ErrorComponent } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/issues/list")({
  component: RouteComponent,
  errorComponent: ErrorComponent,
});

function RouteComponent() {
  const { issuesQuery } = useIssues();
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList issuesQuery={issuesQuery} />
      </div>
      <div className="col-span-1 px-2">
        <Suspense fallback={<IssueSuspense />}>
          <LabelPicker />
        </Suspense>
      </div>
    </div>
  );
}
