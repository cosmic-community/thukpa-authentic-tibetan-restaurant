const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const buildDir = path.join(process.cwd(), '.next');
  const outDir = path.join(process.cwd(), 'out');
  
  // Check if this is a static export or regular build
  const targetDir = fs.existsSync(outDir) ? outDir : buildDir;
  
  if (!fs.existsSync(targetDir)) {
    console.log('No build directory found. Skipping console capture injection.');
    return;
  }
  
  // Read the console capture script
  const scriptPath = path.join(process.cwd(), 'public', 'dashboard-console-capture.js');
  
  if (!fs.existsSync(scriptPath)) {
    console.log('Console capture script not found. Skipping injection.');
    return;
  }
  
  const consoleScript = fs.readFileSync(scriptPath, 'utf8');
  const scriptTag = `<script>${consoleScript}</script>`;
  
  function processHTMLFiles(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processHTMLFiles(fullPath);
      } else if (item.endsWith('.html')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Check if script is already injected
        if (content.includes('console-capture-ready')) {
          return;
        }
        
        // Inject script into head
        if (content.includes('</head>')) {
          content = content.replace('</head>', `  ${scriptTag}\n</head>`);
          fs.writeFileSync(fullPath, content);
          console.log(`Injected console capture into: ${fullPath}`);
        }
      }
    });
  }
  
  try {
    processHTMLFiles(targetDir);
    console.log('Console capture injection completed.');
  } catch (error) {
    console.error('Error during console capture injection:', error);
  }
}

// Run the injection
if (require.main === module) {
  injectConsoleCapture();
}

module.exports = injectConsoleCapture;