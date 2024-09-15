import { Link } from "@remix-run/react";

interface BreadcrumbsProperties {
  name: string;
  slug: string;
}

export default function Breadcrumbs(props: BreadcrumbsProperties) {
  return (
    <div className="flex">
      <Link
        to={"/"}
        className="pr-6 text-lg font-bold mb-4 block rounded hover:bg-gray-700 transition"
      >
        Home
      </Link>
      <div className="pr-6 text-lg font-bold mb-4">{">"}</div>
      <Link
        to={`/apis/${props.slug}`}
        className="text-lg font-bold mb-4 block rounded hover:bg-gray-700 transition"
      >
        {props.name}
      </Link>
    </div>
  );
}
