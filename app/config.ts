export type API = {
  name: string;
  slug: string;
  url: string;
};

export const apis: Array<API> = [
  {
    name: "API 1",
    slug: "api-1",
    url: "https://petstore.swagger.io/v2/swagger.json",
  },
  {
    name: "API 2",
    slug: "api-2",
    url: "https://another-api.com/openapi.yaml",
  },
];
