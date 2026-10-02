---
name: rapport-du-jour
description: Fait travailler l'équipe d'agents (analyste crypto, service client et, le lundi, recherche produits) puis rassemble leurs résultats dans un seul rapport avec les actions du jour. À utiliser quand l'utilisateur demande son rapport du jour, ou depuis une routine programmée.
---

# Rapport du jour

1. Récupère la date et le jour de la semaine avec `date '+%F %A'`.
2. Lance les agents en parallèle (un seul message avec plusieurs appels à l'outil Agent) :
   - `analyste-crypto` : « Point de marché BTC_USD et ETH_USD, puis mise à jour du journal de paper trading. »
   - `service-client` : « Prépare les brouillons de réponse aux emails clients des dernières 24 h. » Si le connecteur Gmail n'est pas disponible, ne le lance pas et note « Gmail non connecté ».
   - Le lundi, ou si l'utilisateur le demande, `chercheur-produits` : « Trouve 3 produits candidats pour la boutique, avec un plan de test. »
3. Rassemble leurs résultats dans `rapports/AAAA-MM-JJ.md`, dans cet ordre :
   - **À faire aujourd'hui** : 3 actions maximum, la plus utile pour gagner ou économiser de l'argent en premier.
   - Crypto (simulation)
   - Service client
   - Produits (si l'agent a été lancé)
4. Termine ta réponse par la section « À faire aujourd'hui » : c'est ce que l'utilisateur lira en premier sur son téléphone.

Si un agent échoue (connecteur absent, erreur réseau), continue avec les autres et indique-le dans le rapport.
