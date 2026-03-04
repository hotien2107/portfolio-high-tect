export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  highlight: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Nền tảng quản lý công việc nội bộ',
    description:
      'Ứng dụng web giúp team theo dõi task, tiến độ và trao đổi công việc với giao diện trực quan, tập trung vào trải nghiệm người dùng.',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/images/projects/project1.png',
    highlight: 'Tối ưu hiệu năng hiển thị danh sách lớn, giữ UI mượt mà trên cả thiết bị cũ.',
    role: 'Thiết kế kiến trúc FE, xây dựng UI và tối ưu hiệu năng.',
  },
  {
    id: 2,
    name: 'Trang landing page cho sản phẩm SaaS',
    description:
      'Landing page giới thiệu sản phẩm SaaS với nhiều section, tối ưu cho chuyển đổi và tốc độ tải trang.',
    techStack: ['React', 'Vite', 'TailwindCSS'],
    image: '/images/projects/project2.png',
    highlight: 'Điểm Lighthouse cao trên cả mobile và desktop, tối ưu SEO cơ bản.',
    role: 'Xây dựng layout, hiệu ứng scroll và tích hợp analytics.',
  },
  {
    id: 3,
    name: 'Dashboard thống kê dữ liệu bán hàng',
    description:
      'Giao diện dashboard hiển thị số liệu, biểu đồ và bộ lọc nâng cao, giúp ban điều hành nắm được tình hình kinh doanh nhanh chóng.',
    techStack: ['React', 'Chart.js', 'TailwindCSS'],
    image: '/images/projects/project4.png',
    highlight: 'Thiết kế component biểu đồ tái sử dụng, dễ mở rộng cho nhiều loại dữ liệu.',
    role: 'Thiết kế UI, xây dựng hệ thống component và layout dashboard.',
  },
  {
    id: 4,
    name: 'Website giới thiệu cá nhân (Portfolio)',
    description:
      'Trang portfolio cá nhân (chính là site này), tập trung vào trình bày rõ ràng, hiệu ứng vừa phải và dễ mở rộng.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    image: '/images/projects/project5.png',
    highlight: 'Thiết kế cấu trúc component rõ ràng, dễ tái sử dụng cho nhiều dự án khác.',
    role: 'Toàn bộ thiết kế và triển khai frontend.',
  },
];

