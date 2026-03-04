export interface BlogEntry {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  planned?: boolean;
}

export const blogEntries: BlogEntry[] = [
  {
    slug: 'react-hooks-ghi-chu-thuc-chien',
    title: 'React Hooks – ghi chú thực chiến',
    summary:
      'Nơi bạn có thể ghi lại các pattern, kinh nghiệm và lỗi thường gặp khi dùng useState, useEffect, useMemo, useCallback…',
    tags: ['React', 'Hooks'],
    planned: true,
  },
  {
    slug: 'tailwindcss-design-system-ca-nhan',
    title: 'TailwindCSS & design system cá nhân',
    summary:
      'Tổng hợp các class, component và guideline giúp bạn tái sử dụng UI nhanh hơn giữa các project.',
    tags: ['TailwindCSS', 'UI'],
    planned: true,
  },
  {
    slug: 'typescript-cho-frontend-de-khong-so',
    title: 'TypeScript cho frontend – để không sợ type',
    summary:
      'Giải thích các khái niệm TypeScript thường dùng trong dự án frontend thực tế (type, interface, union, generics ở mức vừa phải).',
    tags: ['TypeScript', 'Frontend'],
    planned: true,
  },
];

