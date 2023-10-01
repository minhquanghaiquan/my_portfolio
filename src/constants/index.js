import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Giới thiệu",
  },
  {
    id: "work",
    title: "Công việc",
  },
  {
    id: "contact",
    title: "Liên hệ",
  },
];

const services = [
  {
    title: "Lecturer",
    icon: web,
  },
  {
    title: "Embedded Engineer",
    icon: mobile,
  },
  {
    title: "Electronic Engineer",
    icon: backend,
  },
  {
    title: "Soldier",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Nhập ngũ",
    company_name: "Học viện Kỹ thuật Quân sự",
    icon: starbucks,
    iconBg: "#383E56",
    date: "9/2015 - 12/2016",
    points: [
      "Học bổng Olon Vallet cho học sinh xuất sắc khu vực phía nam",
      "Đậu vào Học viện Kỹ Thuật Quân sự",
      "Đạt danh hiệu chiến sĩ thi đua với thành tích xuất sắc cho học viên năm 1",
      "Học bổng du học Nga toàn phần của Bộ Quốc Phòng",
    ],
  },
  {
    title: "Đi du học",
    company_name: "Học viên Hải quân Liên Bang Nga",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "12/2016 - 6/2022",
    points: [
      "Học viên xuất sắc 5 năm liền",
      "Tốt nghiệp xuất sắc - nhận huy chương của Bộ Quốc Phòng Nga",
      "Lập trình Web",
      "Nhận thưởng của của Bộ Quốc Phòng Việt Nam dành cho học viên tốt nghiệp xuất sắc ",
    ],
  },
  {
    title: "Nhận công tác",
    company_name: "Giảng viên trường Quân sự tại Thành Phố Hồ Chí Minh ",
    icon: shopify,
    iconBg: "#383E56",
    date: "6/2022 - Nay",
    points: [
      "Giảng dạy chuyên ngành cho học viên quân sự",
      "Tham gia nghiên cứu khoa học",
      "Tập huấn năng cao kỹ năng sư phạm",
      "Tập huấn chuyên ngành tại Hải Phòng",
    ],
  },
  {
    title: "Tham gia công ty TBNET",
    company_name: "TBNET",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "6/2022 - Nay",
    points: [
      "Xây dựng server cho hệ thống thiết bị IOT",
      "Hoàn thiện trang web cho TBNET",
      "Kiểm nghiệm sản phẩm cho thiết bị IOT",
      "Lập trình nhúng trên STM-32 , ESP-32",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Quang đã tạo ra một trang web vô cùng sống động, tôi rất tin tưởng bạn ấy",
    name: "Mr. Cường",
    designation: "CEO",
    company: "TB NET",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Bạn ấy là bạn giảng viên trẻ đầy nhiệt huyết, luôn cố gắng trong từng bài giảng",
    name: "Mr. Đạt",
    designation: "Chủ nhiệm khoa",
    company: "Trường quân sự",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Là một người sỹ quan, đồng chí Quang luôn cố gắng hoàn thành xuất sắc mọi nhiệm vụ được giao",
    name: "Mr. Duân",
    designation: "Phó chủ nhiệm",
    company: "Trường quân sự",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "TBNET - WEB",
    description:
      "Trang web cho công ty thiết bị viễn thông TBNET - được viết dựa trên framework reactjs kết hợp javascript",
    tags: [
      {
        name: "tbnet",
        color: "blue-text-gradient",
      },
      {
        name: "vienthong",
        color: "green-text-gradient",
      },
      {
        name: "web",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://tbnet.vn/",
  },
  {
    name: "SERVER FOR IOT",
    description:
      "Xây dựng server cho thiết bị IOT thông qua giao thức MQTT gửi từ chip ESP32 đo dòng điện tại các trạm",
    tags: [
      {
        name: "serverforiot",
        color: "blue-text-gradient",
      },
      {
        name: "mqtt",
        color: "green-text-gradient",
      },
      {
        name: "esp32",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/minhquanghaiquan/tbnet_web_demo",
  },
  {
    name: "WEB APP",
    description:
      "Một ứng dụng Web giúp đưa ra lời khuyên, được thiết kế dựa trên html, css, javascript. Đây là bản demo cho dự án kết hợp AI",
    tags: [
      {
        name: "webapp",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://advice-app-demo.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
