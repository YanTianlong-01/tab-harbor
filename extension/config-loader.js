/**
 * config-loader.js
 * 
 * Dynamically loads the optional personal config file.
 * This avoids inline scripts to comply with CSP.
 */
(function() {
  const script = document.createElement('script');
  script.src = 'config.local.js';
  script.onerror = function() {
    // File doesn't exist, that's fine - app.js uses sensible defaults
    console.log('[tab-harbor] No personal config found, using defaults');
  };
  document.head.appendChild(script);
})();
