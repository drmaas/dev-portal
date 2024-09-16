export type APIFormat = "json" | "yml";

export type API = {
  name: string;
  slug: string;
  url: string;
  format: APIFormat;
};

export const apis: Record<string, Omit<API, "slug">> = {
  "swagger-petstore": {
    name: "Swagger Petstore",
    url: "https://petstore.swagger.io/v2/swagger.json",
    format: "json",
  },
  "simple-openapi-overview": {
    name: "Simple OpenAPI Overview",
    url: "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/refs/heads/main/examples/v3.0/api-with-examples.yaml",
    format: "yml",
  },
  "invalid-spec": {
    name: "Invalid Spec",
    url: "https://another-api.com/openapi.yaml",
    format: "yml",
  },
};

export const apiList: Array<API> = [];
for (const slug in apis) {
  const api: API = {
    name: apis[slug].name,
    slug,
    url: apis[slug].url,
  };
  apiList.push(api);
}
