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
  
  // Replace text-white/XX with text-[var(--text-color)] opacity-XX
  // Since we also have text-white, replace it with text-[var(--text-color)]
  
  // To avoid opacity affecting children, it's better to use CSS variables with RGB
  // But wait, it's easier to just use JS to transform:
  // text-white -> text-[var(--text-color)]
  // text-white/XX -> text-[var(--text-color)] opacity-XX
  // bg-black/XX -> bg-[var(--bg-color)]/XX? Wait, bg doesn't matter if we just use bg-opacity
  // bg-black/XX -> bg-[var(--bg-color)] bg-opacity-XX
  // bg-white/XX -> bg-[var(--text-color)] bg-opacity-XX
  // border-white/XX -> border-[var(--text-color)] border-opacity-XX
  // border-white -> border-[var(--text-color)]
  // text-black -> text-[var(--bg-color)]
  
  // Careful with specific occurrences
  content = content.replace(/\btext-white\/(\d+)\b/g, 'text-[var(--text-color)] opacity-$1');
  content = content.replace(/\btext-white\b/g, 'text-[var(--text-color)]');
  
  content = content.replace(/\bbg-black\/(\d+)\b/g, 'bg-[var(--bg-color)] bg-opacity-$1');
  content = content.replace(/\bbg-white\/(\d+)\b/g, 'bg-[var(--text-color)] bg-opacity-$1');
  
  content = content.replace(/\bborder-white\/(\d+)\b/g, 'border-[var(--text-color)] border-opacity-$1');
  content = content.replace(/\bborder-white\b/g, 'border-[var(--text-color)]');
  
  content = content.replace(/\btext-black\/(\d+)\b/g, 'text-[var(--bg-color)] opacity-$1');
  content = content.replace(/\btext-black\b/g, 'text-[var(--bg-color)]');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced colors in ' + files.length + ' files.');
