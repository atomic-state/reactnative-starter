import { createHttpClient, fetcher } from "http-react-fetcher"

export const useRequest = fetcher.extend({
  baseUrl: "",
})

export const http = createHttpClient(useRequest.config.baseUrl)
