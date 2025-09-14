(function() {
  // Only run in iframe context (dashboard preview)
  if (window.self === window.top) return;
  
  const logs = [];
  const MAX_LOGS = 500;
  
  // Store original console methods
  const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug
  };
  
  // Helper function to safely serialize values
  function serializeValue(value) {
    if (typeof value === 'object' && value !== null) {
      try {
        return JSON.stringify(value, (key, val) => {
          if (typeof val === 'function') return '[Function]';
          if (val instanceof Error) return val.toString();
          if (typeof val === 'undefined') return '[Undefined]';
          return val;
        }, 2);
      } catch (e) {
        return '[Object - Cannot Serialize]';
      }
    }
    return String(value);
  }
  
  // Capture console logs
  function captureLog(level, args) {
    const timestamp = new Date().toISOString();
    const message = args.map(serializeValue).join(' ');
    
    const logEntry = {
      timestamp,
      level,
      message,
      url: window.location.href
    };
    
    // Store log with limit
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift();
    }
    
    // Send to parent dashboard
    try {
      window.parent.postMessage({
        type: 'console-log',
        log: logEntry
      }, '*');
    } catch (e) {
      // Silently fail if postMessage fails
    }
  }
  
  // Override console methods
  ['log', 'warn', 'error', 'info', 'debug'].forEach(method => {
    console[method] = function(...args) {
      // Call original method first
      originalConsole[method].apply(console, args);
      // Then capture for dashboard
      captureLog(method, args);
    };
  });
  
  // Capture unhandled errors
  window.addEventListener('error', function(event) {
    captureLog('error', [`Uncaught Error: ${event.message}`, `at ${event.filename}:${event.lineno}:${event.colno}`]);
  });
  
  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    captureLog('error', [`Unhandled Promise Rejection: ${event.reason}`]);
  });
  
  // Send ready signal to dashboard
  function sendReady() {
    try {
      window.parent.postMessage({
        type: 'console-capture-ready',
        url: window.location.href,
        timestamp: new Date().toISOString()
      }, '*');
      
      // Also send current route info
      sendRouteChange();
    } catch (e) {
      // Silently fail
    }
  }
  
  // Send route change information
  function sendRouteChange() {
    try {
      window.parent.postMessage({
        type: 'route-change',
        route: {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
          href: window.location.href
        },
        timestamp: new Date().toISOString()
      }, '*');
    } catch (e) {
      // Silently fail
    }
  }
  
  // Monitor route changes for SPA navigation
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    setTimeout(sendRouteChange, 0);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    setTimeout(sendRouteChange, 0);
  };
  
  window.addEventListener('popstate', sendRouteChange);
  window.addEventListener('hashchange', sendRouteChange);
  
  // Send ready signal when loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sendReady);
  } else {
    sendReady();
  }
  
  // Also send on window load for good measure
  window.addEventListener('load', sendReady);
})();