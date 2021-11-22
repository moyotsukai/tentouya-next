import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: 'tentouya',
  apiKey: process.env.API_KEY
})

export { client }