import { Link } from "@remix-run/react";
import { apiList } from "~/config";

export default function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 text-white p-6">
      <Link
        to={"/"}
        className="text-lg font-bold mb-4 block rounded hover:bg-gray-700 transition"
      >
        Home
      </Link>
      <h2 className="text-lg font-bold mb-4">Available APIs</h2>
      <ul className="space-y-2">
        {apiList.map((api) => (
          <li key={api.slug}>
            <Link
              to={`/apis/${api.slug}`}
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              {api.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
