import { createHttpClient, fetcher } from "http-react-fetcher"

export const useHttp = fetcher.extend({
  baseUrl: "",
})

export const http = createHttpClient(useHttp.config.baseUrl)
