import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/issues/issue/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate to={".."} />;
}
