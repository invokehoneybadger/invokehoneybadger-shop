# HBV Shop — Static Catalog
**Domain:** https://shop.invokehoneybadger.com

Static storefront with a pure HBV theme. Products are loaded from `data/products.json`.

## Add/Update Products
Edit `data/products.json`:
```json
[
  {"title":"HBV Tee — Black/Gold","price":"$28","image":"assets/img/merch_tshirt.jpg","link":"#"},
  {"title":"HBV Patch — Velcro","price":"$12","image":"assets/img/merch_patch.jpg","link":"#"}
]
```

## Deploy
1. Settings → Pages → Deploy from branch → `main` (root)
2. Custom domain: `shop.invokehoneybadger.com`
3. Enforce HTTPS
