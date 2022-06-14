import { fetcher } from "http-react-fetcher"

export const useRequest = fetcher.extend({
  baseUrl: ""
})
