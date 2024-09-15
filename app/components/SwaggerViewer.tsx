import { useLocation } from "@remix-run/react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Breadcrumbs from "./Breadcrumbs";
import { apis } from "~/config";

interface SwaggerViewerProps {
  specUrl: string;
}

export default function SwaggerViewer({ specUrl }: SwaggerViewerProps) {
  const location = useLocation();
  const apiName = location.pathname.split("/").pop() ?? ""; // Extract API slug from URL
  const name = apis.find((i) => i.slug === apiName)?.name ?? '';
  return (  
    <div>
      <Breadcrumbs name={name} slug={apiName} />
      <div className="h-full">
        <SwaggerUI url={specUrl} />
      </div>
    </div>
  );
}
