(function() {
  const favicons = {
    dark: '/img/favicon.ico',
    light: '/img/inv.favicon.ico',
  };

  function setFavicon(src) {
    // Remove existing favicon(s)
    document.querySelectorAll("link[rel~='icon']").forEach(el => el.parentNode.removeChild(el));
    // Add new favicon
    let link = document.createElement('link');
    link.rel = 'icon';
    link.href = src;
    link.type = 'image/x-icon';  // Use correct MIME for .ico
    document.head.appendChild(link);
    // Debug:
    console.log("Favicon set to:", src);
  }

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function update() {
    setFavicon(favicons[getTheme()] || favicons.light);
  }

  // Listen for theme changes
  new MutationObserver(update).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
  window.addEventListener('focus', update);

  // Initial set
  update();
})();
