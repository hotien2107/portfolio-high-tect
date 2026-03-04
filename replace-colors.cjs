const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // text-white -> text-foreground
  content = content.replace(/\btext-white\b/g, 'text-foreground');
  
  // bg-black -> bg-surface-bg or bg-background
  // For cards, we want surface. For absolute overlay, we want background
  // bg-black/60, bg-black/90 are usually cards/navbar. bg-black/40
  content = content.replace(/\bbg-black\b/g, 'bg-background');
  
  // bg-white/5 -> bg-foreground/5
  content = content.replace(/\bbg-white\b/g, 'bg-foreground');
  
  // border-white -> border-foreground
  content = content.replace(/\bborder-white\b/g, 'border-foreground');
  
  // border-black -> border-background
  content = content.replace(/\bborder-black\b/g, 'border-background');
  
  // text-black -> text-background
  content = content.replace(/\btext-black\b/g, 'text-background');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Processed ' + files.length + ' files.');
