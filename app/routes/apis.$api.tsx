import { useLoaderData, useParams } from "@remix-run/react";
import SwaggerViewer from "~/components/SwaggerViewer";
import { apis } from "~/config";

export async function loader() {
  return { token: process.env.GITHUB_TOKEN };
}

export default function ApiRoute() {
  const { token } = useLoaderData<typeof loader>();
  const { api } = useParams();
  const specUrl = apis.find((i) => i.slug === api)?.url ?? '';

  return specUrl ? (
    <div className="p-4">
      <SwaggerViewer specUrl={`${specUrl}?token=${token}`} />
    </div>
  ) : (
    <p className="p-4">API specification not found.</p>
  );
}
