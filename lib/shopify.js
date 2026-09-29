export async function fetchShopify(query, variables = {}) {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN
  if (!domain || !token) {
    throw new Error('Missing NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_API_TOKEN environment variables')
  }

  const res = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }
  return json.data
}
