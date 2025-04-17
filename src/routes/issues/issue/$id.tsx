import { useIssue } from "@/issues/hooks/useIssue";
import { createFileRoute, Navigate, useNavigate, useParams } from "@tanstack/react-router";
import { FiSkipBack } from "react-icons/fi";
import { IssueComment } from "../../../issues/componentes/issue-comment";

export const Route = createFileRoute("/issues/issue/$id")({
  component: RouteComponent,
});

const comment1 =
  "It would provide the ability to create a state, read the state \r\nand set the state form anywhere in the code base.\r\n\r\nIt would be something like this:\r\n\r\n## adding the state to the global state\r\n\r\n```js\r\nimport {useGlobalState} from 'react';\r\nconst ProviderComponent = ()=>{\r\n\r\n  const [ceateState, _, _] = useGlobalState();\r\n\r\n  createState('provider', 'stateName', 'state value');\r\n  createState('provider', 'otherStateName', 'another state value');\r\n  // or maybe, set all the states in one line\r\n  createState('provider', {stateName: 'state value', anotherStateName: 'another state value'});\r\n\r\n  return <></>\r\n}\r\n```\r\n\r\n##  now I can use it like so:\r\n\r\n```js\r\nimport {useGlobalState} from 'react';\r\n\r\nconst ConsumerComponent = ()=>{\r\n  \r\n  const [_, getState, setState] = useGlobalState();\r\n\r\n  const providerStateCpy = getState('key', 'stateName');\r\n\r\n  const changeProviderState = ()=>{\r\n    setState('key', 'stateName', 'new state value');\r\n  }\r\n  return <p onClick={changeProviderState}>{providerStateCpy}</p>\r\n}\r\n```\r\nI wonder if it's a possible thing without making major changes though.";

function RouteComponent() {
  const navigate = useNavigate({ from: "/issues/issue/$id" });
  const { id } = useParams({ from: "/issues/issue/$id", select: ({ id }) => ({ id }) });

  const { issueQuery } = useIssue(Number(id));
  if (issueQuery.isLoading) {
    return <p>Cargando...</p>;
  }

  if (!issueQuery.data) {
    return <Navigate to="/issues/list" />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate({ to: "/issues/list" })}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}
      <IssueComment body={comment1} />
      {/* Comentario de otros */}
      {/* <IssueComment body={comment2} /> */}
      {/* <IssueComment body={comment3} /> */}
    </div>
  );
}
