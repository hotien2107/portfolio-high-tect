export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nguyễn Văn Anh',
    role: 'Senior Frontend Developer',
    company: 'TechVision Solutions',
    image: 'https://i.pravatar.cc/150?u=1',
    quote:
      'Nền tảng này đã thay đổi hoàn toàn cách chúng tôi quản lý quy trình làm việc. Giao diện cực kỳ thân thiện và hiệu quả.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lê Thị Mai',
    role: 'Product Manager',
    company: 'Creative Studio',
    image: 'https://i.pravatar.cc/150?u=2',
    quote:
      'Đội ngũ hỗ trợ rất nhiệt tình. Tôi ấn tượng nhất với khả năng tùy biến linh hoạt của hệ thống này.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Trần Minh Hoàng',
    role: 'CTO',
    company: 'Fintech Hub',
    image: 'https://i.pravatar.cc/150?u=3',
    quote:
      'Hiệu năng vượt trội và tính bảo mật cao là lý do chúng tôi tin tưởng đồng hành cùng các bạn trong suốt 2 năm qua.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Phạm Thảo Vy',
    role: 'UI/UX Designer',
    company: 'Green Agency',
    image: 'https://i.pravatar.cc/150?u=4',
    quote:
      'Một công cụ tuyệt vời cho những ai yêu thích sự tinh tế và tối giản. Rất đáng để đầu tư!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Hoàng Đức Long',
    role: 'Marketing Director',
    company: 'Global Retail',
    image: 'https://i.pravatar.cc/150?u=5',
    quote:
      'Dữ liệu báo cáo rất chi tiết và trực quan. Nó giúp tôi đưa ra quyết định nhanh chóng hơn bao giờ hết.',
    rating: 4,
  },
];
