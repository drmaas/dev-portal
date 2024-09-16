import { LoaderFunctionArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  json,
  useLoaderData,
  useParams,
  useRouteError,
} from "@remix-run/react";
import SwaggerViewer from "~/components/SwaggerViewer";
import { apis } from "~/config";
import { yml } from "~/utils";

const apiName = (apiKey: string | undefined) => {
  return apis[apiKey ?? ""]?.name;
};
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const key = params.api ?? "";
  const specUrl = apis[key].url;

  // TODO this will be useful when tokens are needed to access raw content
  const token = process.env.GITHUB_TOKEN;

  // Fetch the OpenAPI spec from the respective URL
  const response = await fetch(`${specUrl}?token=${token}`);

  if (!response.ok) {
    throw new Response(`Failed to load OpenAPI spec from ${specUrl}`, {
      status: 500,
    });
  }

  let openApiSpec;
  if (apis[key].format === "json") {
    openApiSpec = await response.json();
  } else {
    const body = await response.text();
    openApiSpec = await yml(body);
  }
  return json(openApiSpec);
};

export default function ApiRoute() {
  const { api } = useParams();
  const specBody = useLoaderData<typeof loader>();

  return specBody ? (
    <div className="p-4">
      <SwaggerViewer specBody={specBody} />
    </div>
  ) : (
    <p className="p-4">
      API specification for &quot;{apiName(api)}&quot; not found.
    </p>
  );
}

export function ErrorBoundary() {
  const { api } = useParams();
  const error = useRouteError() as Error;
  if (isRouteErrorResponse(error)) {
    return <p className="p-4">{error.data}</p>;
  } else {
    return (
      <p className="p-4">
        API specification for &quot;{apiName(api)}&quot; not found.
      </p>
    );
  }
}
