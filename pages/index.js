import ProductCard from '../components/ProductCard'
import { fetchShopify } from '../lib/shopify'

export default function Home({ products }) {
  return (
    <main style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1>Boutique — Shopify + Next.js</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16, marginTop: 24 }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const query = `query Products { products(first:12) { edges { node { id title handle images(first:1) { edges { node { url altText } } } variants(first:1) { edges { node { id priceV2 { amount currencyCode } } } } } } } }`;
  const data = await fetchShopify(query);
  const products = (data.products?.edges || []).map(e => {
    const node = e.node;
    return {
      id: node.id,
      title: node.title,
      handle: node.handle,
      image: node.images.edges[0]?.node?.url || null,
      price: node.variants.edges[0]?.node?.priceV2?.amount || null,
      currency: node.variants.edges[0]?.node?.priceV2?.currencyCode || null
    }
  })

  return { props: { products }, revalidate: 60 }
}
