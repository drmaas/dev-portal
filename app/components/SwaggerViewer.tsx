import { useLocation } from "@remix-run/react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Breadcrumbs from "./Breadcrumbs";
import { apis } from "~/config";

interface SwaggerViewerProps {
  specBody?: string;
  specUrl?: string;
}

export default function SwaggerViewer({
  specBody,
  specUrl,
}: SwaggerViewerProps) {
  const location = useLocation();
  // Extract API slug from URL
  const apiName = location.pathname.split("/").pop() ?? "";
  const name = apis[apiName]?.name ?? "";

  return (
    <div>
      <Breadcrumbs name={name} slug={apiName} />
      <div className="h-full">
        {specUrl ? (
          <SwaggerUI url={specUrl} />
        ) : specBody ? (
          <SwaggerUI spec={specBody} />
        ) : (
          <p className="p-4">Oops, no spec was provided</p>
        )}
      </div>
    </div>
  );
}
