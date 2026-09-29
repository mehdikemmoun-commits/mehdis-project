export default function ProductCard({ product }) {
  return (
    <article style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
      {product.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={product.image} alt={product.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      ) : (
        <div style={{ width: '100%', height: 180, background: '#f3f4f6', borderRadius: 6 }} />
      )}
      <h3 style={{ fontSize: 16, marginTop: 10 }}>{product.title}</h3>
      <p style={{ color: '#374151', marginTop: 6 }}>{product.price ? `${product.price} ${product.currency}` : 'Prix non disponible'}</p>
      <div style={{ marginTop: 10 }}>
        <a href={`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/products/${product.handle}`} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>Voir sur la boutique</a>
      </div>
    </article>
  )
}
