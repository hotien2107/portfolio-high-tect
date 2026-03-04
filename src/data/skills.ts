export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Cơ bản' | 'Khá' | 'Tốt' | 'Thành thạo';
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    description:
      'Tập trung vào trải nghiệm người dùng, hiệu năng và khả năng mở rộng giao diện.',
    skills: [
      { name: 'React / React Hooks', level: 'Thành thạo' },
      { name: 'TypeScript', level: 'Tốt' },
      { name: 'TailwindCSS', level: 'Thành thạo' },
      { name: 'Next.js (CSR/SSR)', level: 'Khá' },
    ],
  },
  {
    id: 'architecture',
    title: 'Kiến trúc & Chất lượng mã',
    description:
      'Viết code dễ bảo trì, có cấu trúc rõ ràng, ưu tiên tái sử dụng và testability.',
    skills: [
      { name: 'Component-driven design', level: 'Tốt' },
      { name: 'Atomic design / UI patterns', level: 'Tốt' },
      { name: 'Clean code & conventions', level: 'Tốt' },
    ],
  },
  {
    id: 'workflow',
    title: 'Quy trình làm việc',
    description:
      'Làm việc hiệu quả với team thông qua quy trình, công cụ và giao tiếp rõ ràng.',
    skills: [
      { name: 'Git / Github flow', level: 'Tốt' },
      { name: 'Figma handoff', level: 'Khá' },
      { name: 'Agile/Scrum', level: 'Khá' },
    ],
  },
];
