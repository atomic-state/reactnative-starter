import { createHttpClient, fetcher } from "orange-bird"

export const useRequest = fetcher.extend({
  baseUrl: ""
})

export const http = createHttpClient(useRequest.config.baseUrl)
