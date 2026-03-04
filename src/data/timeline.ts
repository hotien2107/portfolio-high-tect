export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  description: string;
  type: 'Học tập' | 'Công việc' | 'Cá nhân';
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    period: 'Bước đầu với lập trình',
    title: 'Làm quen với C/C++ và các bài tập thuật toán',
    description:
      'Bắt đầu với những bài tập cơ bản, dần dần nâng cấp qua các project nhỏ trên GitHub để rèn tư duy logic.',
    type: 'Học tập',
  },
  {
    id: 2,
    period: 'Khám phá web frontend',
    title: 'HTML/CSS/JavaScript & những project đầu tay',
    description:
      'Tự xây dựng các trang web tĩnh, landing page và những bài tập JavaScript như “bé tập tính”, từ đó hình thành nền tảng cho frontend.',
    type: 'Cá nhân',
  },
  {
    id: 3,
    period: 'React & hệ sinh thái xung quanh',
    title: 'Xây dựng ứng dụng với React, Express và các công nghệ hiện đại',
    description:
      'Thực hiện nhiều project cá nhân như ReactAdmin, betaptinhexpress…, tập trung vào cách tách component, quản lý state và kết nối API.',
    type: 'Học tập',
  },
  {
    id: 4,
    period: 'Tối ưu & chia sẻ',
    title: 'Xây dựng portfolio và chuẩn bị cho các cơ hội mới',
    description:
      'Hoàn thiện portfolio này để tổng hợp lại những gì đã học, đồng thời chuẩn bị blog để chia sẻ kiến thức và kinh nghiệm thực tế.',
    type: 'Cá nhân',
  },
];

