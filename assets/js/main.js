// Static catalog loader with checkout routing
(async function(){
  const grid = document.getElementById('grid');
  const cfg = window.HBV_SHOP_CONFIG || {checkoutMode:'external'};

  const buildLink = (p) => {
    if (p.checkout === 'stripe' && p.payment_link) return p.payment_link;
    if (cfg.checkoutMode === 'stripe' && p.payment_link) return p.payment_link;
    if (cfg.checkoutMode === 'shopify' && cfg.shopifyBase && p.slug) {
      return cfg.shopifyBase.replace(/\/$/, '') + '/products/' + p.slug;
    }
    return p.link || '#';
  };

  try{
    const res = await fetch('data/products.json', {cache:'no-cache'});
    const items = await res.json();
    const html = items.map(p => `
      <div class="card">
        <img src="${p.image}" alt="${p.title}">
        <div><strong>${p.title}</strong></div>
        <div class="price">${p.price}</div>
        <a class="btn" href="${buildLink(p)}" target="_blank" rel="noopener">Details</a>
      </div>
    `).join('');
    grid.innerHTML = html;
  }catch(e){
    grid.innerHTML = '<p>Unable to load products.</p>';
  }
})();