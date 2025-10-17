// HBV Shop checkout config (static)
window.HBV_SHOP_CONFIG = {
  checkoutMode: 'external', 
  // 'external' uses per-product link
  // 'shopify' uses shopifyBase + '/products/' + product.slug
  // 'stripe' uses product.payment_link (Stripe Payment Link)
  shopifyBase: 'https://shop.yourshop.com'
};