# Next.js + Shopify starter (hybrid dropshipping)

Petit starter pour connecter un frontend Next.js au catalogue Shopify (Storefront API). Idéal pour une boutique hybride où Shopify gère produits/checkout et Next.js fournit l'UI.

Prérequis
- Node.js 18+ et npm
- Un store Shopify et un token Storefront API (Storefront access token)

Variables d'environnement
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` — ex: `maboutique.myshopify.com`
- `SHOPIFY_STOREFRONT_API_TOKEN` — token privé pour Storefront API

Installation & lancement
```bash
npm install
npm run dev
```

Page d'accueil
- `pages/index.js` récupère les premiers produits via la Storefront API et affiche un petit catalogue.

Prochaines étapes suggérées
- Créer un thème ou pages produit plus complètes
- Redirection du panier vers Shopify Checkout ou implémenter Checkout API
- Connecter DSers/Spocket pour l'import AliExpress
- Ajouter traduction FR/AR et multi-devise

## Équipe d'agents IA (Claude Code)

Quatre agents spécialisés sont définis dans `.claude/agents/`. Ils fonctionnent dans Claude Code (app, web ou terminal) ouvert sur ce repo.

| Agent | Rôle | Connecteur |
|---|---|---|
| `chercheur-produits` | Trouve et chiffre des produits à vendre (marge, concurrence, risques, plan de test pub) | Web |
| `redacteur-boutique` | Fiches produit, SEO, scripts pub TikTok/Reels et emails, en FR et AR | – |
| `service-client` | Prépare des brouillons de réponse aux clients, n'envoie jamais rien | Gmail |
| `analyste-crypto` | Point de marché et journal de trading **simulé**, aucun ordre réel | Crypto.com |

Exemples de demandes :
- « Utilise l'agent chercheur-produits pour trouver 3 produits pour le Maroc, budget pub 300 € »
- « Demande au redacteur-boutique la fiche produit en français et en darija pour le produit X »
- `/rapport-du-jour` lance l'équipe et écrit `rapports/AAAA-MM-JJ.md` avec les 3 actions du jour.

Pour les faire travailler automatiquement, programmer une routine Claude Code qui lance `/rapport-du-jour` chaque matin.

Garde-fous : l'analyste crypto ne fait que de la simulation (journal dans `rapports/crypto/`), le service client ne fait que des brouillons, et aucun agent n'invente de chiffres ni d'allégations produit.
