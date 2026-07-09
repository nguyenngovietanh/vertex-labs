import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            // Navigation
            "nav_about": "About",
            "nav_services": "Services",
            "nav_projects": "Projects",
            "nav_team": "Team",
            "nav_contact": "Contact",
            "nav_cta": "Let's Talk",

            // Hero section
            "hero_title": "Where Ideas Become Reality",
            "hero_badge1": "Software Development",
            "hero_badge2": "Digital Products",
            "hero_badge3": "UI/UX Design",
            "hero_title1": "Where Ideas",
            "hero_title2": "Become Reality",
            "hero_desc": "We are a team of experienced engineers and designers building exceptional digital products. From concept to launch, we transform ideas into reality.",
            "hero_cta1": "View Our Work",
            "hero_cta2": "Start a Project",
            "scroll": "Scroll",

            // About section
            "about_badge": "About Us",
            "about_title1": "We build ",
            "about_title2": "digital products",
            "about_title3": " that matter",
            "about_desc1": "Vertex Labs is a technology startup founded by a team of seasoned engineers and designers with years of experience building software, digital products, and crafting exceptional user experiences.",
            "about_desc2": "We believe in the power of technology to transform businesses. Our approach combines strategic thinking with technical excellence to deliver solutions that drive real results.",
            "about_val1_title": "Strategic Approach",
            "about_val1_desc": "We align technology with your business goals",
            "about_val2_title": "Full-Stack Expertise",
            "about_val2_desc": "From design to deployment, we handle it all",
            "about_val3_title": "Modern Technology",
            "about_val3_desc": "Using the latest tools and best practices",
            "stat1": "Projects Delivered",
            "stat2": "Years Experience",
            "stat3": "Happy Clients",
            "stat4": "Client Satisfaction",

             // Services
            "svc_badge": "What We Do",
            "svc_title1": "Capabilities that ",
            "svc_title2": "drive results",
            "svc_desc": "We combine technical expertise with strategic thinking to deliver comprehensive digital solutions that transform businesses and exceed expectations.",
            "svc1_title": "Custom Software Development",
            "svc1_desc": "Tailored software solutions built with modern technologies. From web applications to enterprise systems.",
            "svc1_f1": "Web Apps", "svc1_f2": "APIs", "svc1_f3": "Integrations",
            "svc2_title": "UI/UX Design",
            "svc2_desc": "Creating intuitive, beautiful interfaces that users love. Research-driven design that converts.",
            "svc2_f1": "User Research", "svc2_f2": "Prototyping", "svc2_f3": "Design Systems",
            "svc3_title": "Mobile Development",
            "svc3_desc": "Native and cross-platform mobile applications. iOS, Android, and everything in between.",
            "svc3_f1": "iOS", "svc3_f2": "Android", "svc3_f3": "React Native",
            "svc4_title": "Cloud Solutions",
            "svc4_desc": "Scalable cloud infrastructure and DevOps. AWS, GCP, Azure - we speak all cloud languages.",
            "svc4_f1": "AWS", "svc4_f2": "DevOps", "svc4_f3": "CI/CD",
            "svc5_title": "Data Engineering",
            "svc5_desc": "Building robust data pipelines and analytics platforms. Turn your data into insights.",
            "svc5_f1": "Pipelines", "svc5_f2": "Analytics", "svc5_f3": "ML",
            "svc6_title": "Security & Compliance",
            "svc6_desc": "Keeping your applications secure. Audits, penetration testing, and secure architecture.",
            "svc6_f1": "Audits", "svc6_f2": "Testing", "svc6_f3": "Architecture",

            // Projects
            "proj_badge": "Our Work",
            "proj_title1": "Projects that ",
            "proj_title2": "speak for themselves",
            "proj_desc": "A selection of our recent work, showcasing our expertise in building impactful digital products across various industries.",
            "proj1_title": "FinTech Platform", "proj1_cat": "Web Application", "proj1_desc": "A comprehensive financial management platform with real-time analytics, portfolio tracking, and automated reporting.",
            "proj2_title": "Healthcare App", "proj2_cat": "Mobile Application", "proj2_desc": "Patient-centric healthcare app enabling telemedicine consultations, appointment scheduling, and health records management.",
            "proj3_title": "E-Commerce Platform", "proj3_cat": "Full Stack", "proj3_desc": "Scalable e-commerce solution with advanced inventory management, multi-vendor support, and AI-powered recommendations.",
            "proj4_title": "SaaS Dashboard", "proj4_cat": "Enterprise Software", "proj4_desc": "Enterprise analytics dashboard with customizable widgets, team collaboration, and automated insights generation.",
            "proj5_title": "Real Estate Platform", "proj5_cat": "Web Application", "proj5_desc": "Property listing platform with virtual tours, mortgage calculator, and AI-powered property valuation.",
            "proj6_title": "EdTech Platform", "proj6_cat": "Learning Management", "proj6_desc": "Interactive learning platform with live classes, progress tracking, and gamified learning experience.",
            "proj_cta": "Have a project in mind?",

            // Team 
            "team_badge": "Our Team",
            "team_title1": "The minds behind ",
            "team_title2": "Vertex Labs",
            "team_desc": "A team of passionate technologists and creative thinkers dedicated to building exceptional digital products.",
            "val_section_title": "Our Values Drive Everything We Do",
            "bio1": "A veteran architect and serial entrepreneur with 20+ years of leadership in regenerative design and sustainable community models. Nga brings a powerful, human-centric vision to Vertex Labs, bridging the gap between innovative design principles and high-impact technology solutions.",
            "bio2": "With 5+ years of software engineering experience, Linh excels at balancing robust technical architecture with seamless user experiences. He is a results-driven lead, highly trusted by clients for consistently delivering high-performance products on schedule.",
            "bio3": "A front-end specialist with 5+ years of experience, Kien focuses on crafting intuitive, visually refined interfaces. He bridges the gap between complex functionality and user needs, ensuring every project delivers both aesthetic excellence and smooth interactivity.",
            "bio4": "Combining 7 years of product development with a 3-year focus on UI/UX, Viet Anh is an expert in user-centric design. He translates complex user needs into elegant, high-impact solutions, consistently balancing technical requirements with flawless usability.",
            "val1_title": "Excellence", "val1_desc": "We deliver nothing less than exceptional work.",
            "val2_title": "Innovation", "val2_desc": "We embrace new ideas and technologies.",
            "val3_title": "Integrity", "val3_desc": "We build trust through transparency.",
            "val4_title": "Collaboration", "val4_desc": "We succeed together with our clients.",

            // Clients
            "cli_title1": "What our ",
            "cli_title2": "clients say",
            "test1_quote": "Vertex Labs transformed our digital presence completely. Their technical expertise and creative approach delivered results beyond our expectations.",
            "test1_role": "CTO, FinanceFlow",
            "test2_quote": "Working with the Vertex team was seamless. They understood our vision from day one and executed flawlessly. Highly recommended for any tech project.",
            "test2_role": "Founder, HealthFirst",
            "test3_quote": "The team at Vertex Labs brings a rare combination of technical excellence and business acumen. They delivered our platform ahead of schedule.",
            "test3_role": "Product Director, EduTech",

            // Contact
            "ct_badge": "Get in Touch",
            "ct_title1": "Let's build ",
            "ct_title2": "something great",
            "ct_desc": "Ready to transform your idea into reality? We'd love to hear about your project. Drop us a line and let's start the conversation.",
            "form_name": "Your Name", "form_email": "Email Address", "form_company": "Company (Optional)", "form_msg": "Project Details",
            "form_placeholder_name": "John Doe", "form_placeholder_email": "john@example.com", "form_placeholder_comp": "Your Company", "form_placeholder_msg": "Tell us about your project...",
            "form_btn": "Send Message",
            "ct_email": "Email Us", "ct_call": "Call Us", "ct_visit": "Visit Us",
            "ct_ready": "Ready to start?",
            "ct_book": "Book a free consultation to discuss your project requirements.",
            "ct_schedule": "Schedule a Call",

            // Footer
            "ft_desc": "Building exceptional digital products that transform businesses. From strategy to execution, we're your technology partner.",
            "ft_company": "Company",
            "ft_services": "Services",
            "ft_resources": "Resources",
            "ft_about": "About", "ft_career": "Careers",
            "ft_web": "Web Development", "ft_mobile": "Mobile Apps", "ft_ui": "UI/UX Design", "ft_cloud": "Cloud Solutions",
            "ft_blog": "Blog", "ft_case": "Case Studies", "ft_doc": "Documentation", "ft_privacy": "Privacy Policy",
            "ft_terms": "Terms of Service"
        }
      },
      vi: {
        translation: {
            // Navigation
            "nav_about": "Về chúng tôi",
            "nav_services": "Dịch vụ",
            "nav_projects": "Dự án",
            "nav_team": "Đội ngũ",
            "nav_contact": "Liên hệ",
            "nav_cta": "Liên hệ ngay",

            // Hero section
            "hero_title": "Nơi ý tưởng trở thành hiện thực",
            "hero_badge1": "Phát triển phần mềm",
            "hero_badge2": "Sản phẩm kỹ thuật số",
            "hero_badge3": "Thiết kế UI/UX",
            "hero_title1": "Nơi ý tưởng",
            "hero_title2": "trở thành hiện thực",
            "hero_desc": "Chúng tôi là đội ngũ kỹ sư và thiết kế giàu kinh nghiệm, chuyên xây dựng các sản phẩm kỹ thuật số đột phá. Từ ý tưởng đến hiện thực, chúng tôi biến tầm nhìn thành kết quả.",
            "hero_cta1": "Xem dự án",
            "hero_cta2": "Bắt đầu dự án",
            "scroll": "Cuộn",

            // About section
            "about_badge": "Về chúng tôi",
            "about_title1": "Chúng tôi tạo ra ",
            "about_title2": "sản phẩm kỹ thuật số",
            "about_title3": " mang lại giá trị",
            "about_desc1": "Vertex Labs là một startup công nghệ được thành lập bởi đội ngũ kỹ sư và thiết kế dày dạn kinh nghiệm, chuyên xây dựng phần mềm, sản phẩm số và tạo ra những trải nghiệm người dùng tuyệt vời.",
            "about_desc2": "Chúng tôi tin vào sức mạnh của công nghệ trong việc chuyển đổi doanh nghiệp. Phương pháp của chúng tôi kết hợp tư duy chiến lược với kỹ năng chuyên môn để mang lại kết quả thực tế.",
            "about_val1_title": "Phương pháp Chiến lược",
            "about_val1_desc": "Chúng tôi tối ưu công nghệ theo mục tiêu kinh doanh của bạn",
            "about_val2_title": "Chuyên môn Full-Stack",
            "about_val2_desc": "Từ thiết kế đến triển khai, chúng tôi xử lý trọn vẹn",
            "about_val3_title": "Công nghệ Hiện đại",
            "about_val3_desc": "Sử dụng những công cụ và thực tiễn tốt nhất",
            "stat1": "Dự án đã bàn giao",
            "stat2": "Năm kinh nghiệm",
            "stat3": "Khách hàng hài lòng",
            "stat4": "Sự hài lòng của KH",

            // Services
            "svc_badge": "Dịch vụ của chúng tôi",
            "svc_title1": "Năng lực ",
            "svc_title2": "tạo nên kết quả",
            "svc_desc": "Chúng tôi kết hợp chuyên môn kỹ thuật với tư duy chiến lược để mang đến các giải pháp kỹ thuật số toàn diện, giúp doanh nghiệp chuyển đổi và vượt xa kỳ vọng.",
            "svc1_title": "Phát triển phần mềm tùy chỉnh",
            "svc1_desc": "Giải pháp phần mềm thiết kế riêng với công nghệ hiện đại. Từ web apps đến hệ thống doanh nghiệp.",
            "svc1_f1": "Web Apps", "svc1_f2": "APIs", "svc1_f3": "Tích hợp",
            "svc2_title": "Thiết kế UI/UX",
            "svc2_desc": "Tạo ra các giao diện trực quan, đẹp mắt mà người dùng yêu thích. Thiết kế dựa trên nghiên cứu để tăng tỷ lệ chuyển đổi.",
            "svc2_f1": "Nghiên cứu người dùng", "svc2_f2": "Thiết kế mẫu (Prototyping)", "svc2_f3": "Hệ thống thiết kế",
            "svc3_title": "Phát triển ứng dụng di động",
            "svc3_desc": "Ứng dụng di động native và đa nền tảng. iOS, Android và mọi công nghệ liên quan.",
            "svc3_f1": "iOS", "svc3_f2": "Android", "svc3_f3": "React Native",
            "svc4_title": "Giải pháp Cloud",
            "svc4_desc": "Hạ tầng cloud có thể mở rộng và DevOps. AWS, GCP, Azure - chúng tôi thông thạo mọi nền tảng.",
            "svc4_f1": "AWS", "svc4_f2": "DevOps", "svc4_f3": "CI/CD",
            "svc5_title": "Kỹ thuật dữ liệu",
            "svc5_desc": "Xây dựng các đường ống dữ liệu mạnh mẽ và nền tảng phân tích. Biến dữ liệu thành thông tin chi tiết.",
            "svc5_f1": "Pipelines", "svc5_f2": "Phân tích", "svc5_f3": "Machine Learning",
            "svc6_title": "Bảo mật & Tuân thủ",
            "svc6_desc": "Giữ cho ứng dụng của bạn an toàn. Kiểm định, thử nghiệm xâm nhập và kiến trúc bảo mật.",
            "svc6_f1": "Kiểm định", "svc6_f2": "Thử nghiệm", "svc6_f3": "Kiến trúc",

            // Projects
            "proj_badge": "Dự án tiêu biểu",
            "proj_title1": "Những dự án ",
            "proj_title2": "tự nói lên chất lượng",
            "proj_desc": "Tuyển tập những dự án mới nhất, thể hiện năng lực chuyên môn trong việc xây dựng các sản phẩm kỹ thuật số có tầm ảnh hưởng.",
            "proj1_title": "Nền tảng FinTech", "proj1_cat": "Ứng dụng Web", "proj1_desc": "Nền tảng quản lý tài chính toàn diện với phân tích thời gian thực, theo dõi danh mục đầu tư và báo cáo tự động.",
            "proj2_title": "Ứng dụng Y tế", "proj2_cat": "Ứng dụng di động", "proj2_desc": "Ứng dụng chăm sóc sức khỏe lấy bệnh nhân làm trung tâm, hỗ trợ tư vấn từ xa, đặt lịch hẹn và quản lý bệnh án.",
            "proj3_title": "Nền tảng E-Commerce", "proj3_cat": "Full Stack", "proj3_desc": "Giải pháp thương mại điện tử có khả năng mở rộng, quản lý tồn kho nâng cao, hỗ trợ đa nhà bán và gợi ý bằng AI.",
            "proj4_title": "SaaS Dashboard", "proj4_cat": "Phần mềm doanh nghiệp", "proj4_desc": "Bảng phân tích doanh nghiệp với các widget tùy chỉnh, hỗ trợ cộng tác nhóm và tạo thông tin chi tiết tự động.",
            "proj5_title": "Nền tảng Bất động sản", "proj5_cat": "Ứng dụng Web", "proj5_desc": "Nền tảng đăng tin bất động sản với tour ảo, tính toán khoản vay và định giá tài sản bằng AI.",
            "proj6_title": "Nền tảng EdTech", "proj6_cat": "Quản lý học tập", "proj6_desc": "Nền tảng học tập tương tác với lớp học trực tuyến, theo dõi tiến độ và trải nghiệm học tập gamification.",
            "proj_cta": "Bạn có dự án nào cần triển khai?",

            // Team 
            "team_badge": "Đội ngũ của chúng tôi",
            "team_title1": "Đội ngũ đứng sau ",
            "team_title2": "Vertex Labs",
            "team_desc": "Tập hợp những nhà công nghệ nhiệt huyết và những nhà tư tưởng sáng tạo, tận tâm xây dựng các sản phẩm kỹ thuật số đột phá.",
            "val_section_title": "Giá trị cốt lõi dẫn dắt mọi hành động",
            "bio1": "Một kiến trúc sư kỳ cựu và là doanh nhân với hơn 20 năm lãnh đạo trong thiết kế tái sinh và các mô hình cộng đồng bền vững. Nga mang đến tầm nhìn nhân văn mạnh mẽ cho Vertex Labs, kết nối các nguyên tắc thiết kế sáng tạo với các giải pháp công nghệ có tác động cao.",
            "bio2": "Với hơn 5 năm kinh nghiệm kỹ thuật phần mềm, Linh xuất sắc trong việc cân bằng giữa kiến trúc kỹ thuật vững chắc và trải nghiệm người dùng liền mạch. Anh là một nhà lãnh đạo định hướng kết quả, được khách hàng tin tưởng cao nhờ việc luôn cung cấp các sản phẩm hiệu suất cao đúng tiến độ.",
            "bio3": "Là chuyên gia front-end với hơn 5 năm kinh nghiệm, Kiên tập trung vào việc tạo ra các giao diện trực quan và tinh tế. Anh là cầu nối giữa chức năng phức tạp và nhu cầu người dùng, đảm bảo mọi dự án đều mang lại sự xuất sắc về thẩm mỹ và tính tương tác mượt mà.",
            "bio4": "Kết hợp hơn 6 năm phát triển sản phẩm với 3 năm tập trung vào UI/UX, Việt Anh là chuyên gia trong lĩnh vực thiết kế lấy người dùng làm trung tâm. Anh chuyển đổi những nhu cầu phức tạp của người dùng thành các giải pháp thanh lịch, có tác động cao, luôn cân bằng giữa yêu cầu kỹ thuật và khả năng sử dụng hoàn hảo.",
            "val1_title": "Xuất sắc", "val1_desc": "Chúng tôi chỉ mang đến những sản phẩm chất lượng vượt trội.",
            "val2_title": "Đổi mới", "val2_desc": "Chúng tôi luôn đón nhận những ý tưởng và công nghệ mới.",
            "val3_title": "Chính trực", "val3_desc": "Chúng tôi xây dựng niềm tin thông qua sự minh bạch.",
            "val4_title": "Hợp tác", "val4_desc": "Chúng tôi cùng khách hàng tiến tới thành công.",

            // Clients
            "cli_title1": "Khách hàng nói ",
            "cli_title2": "gì về chúng tôi",
            "test1_quote": "Vertex Labs đã thay đổi hoàn toàn sự hiện diện kỹ thuật số của chúng tôi. Chuyên môn kỹ thuật và cách tiếp cận sáng tạo của họ đã mang lại kết quả vượt xa kỳ vọng.",
            "test1_role": "CTO, FinanceFlow",
            "test2_quote": "Làm việc với đội ngũ Vertex rất suôn sẻ. Họ hiểu tầm nhìn của chúng tôi ngay từ ngày đầu tiên và thực thi một cách hoàn hảo. Rất khuyến khích cho bất kỳ dự án công nghệ nào.",
            "test2_role": "Người sáng lập, HealthFirst",
            "test3_quote": "Đội ngũ tại Vertex Labs mang đến sự kết hợp hiếm có giữa sự xuất sắc về kỹ thuật và sự nhạy bén trong kinh doanh. Họ đã bàn giao nền tảng của chúng tôi trước thời hạn.",
            "test3_role": "Giám đốc sản phẩm, EduTech",

            // Contact
            "ct_badge": "Liên hệ với chúng tôi",
            "ct_title1": "Cùng tạo nên ",
            "ct_title2": "những điều tuyệt vời",
            "ct_desc": "Sẵn sàng biến ý tưởng của bạn thành hiện thực? Chúng tôi rất muốn lắng nghe về dự án của bạn. Hãy gửi tin nhắn và bắt đầu cuộc trò chuyện.",
            "form_name": "Họ và tên", "form_email": "Địa chỉ Email", "form_company": "Công ty (Tùy chọn)", "form_msg": "Chi tiết dự án",
            "form_placeholder_name": "Nguyễn Văn A", "form_placeholder_email": "nguyenvana@example.com", "form_placeholder_comp": "Công ty của bạn", "form_placeholder_msg": "Kể cho chúng tôi về dự án của bạn...",
            "form_btn": "Gửi tin nhắn",
            "ct_email": "Email", "ct_call": "Gọi điện", "ct_visit": "Địa chỉ",
            "ct_ready": "Sẵn sàng bắt đầu?",
            "ct_book": "Đặt lịch tư vấn miễn phí để trao đổi chi tiết về dự án của bạn.",
            "ct_schedule": "Đặt lịch gọi",

            // Footer
            "ft_desc": "Xây dựng các sản phẩm kỹ thuật số vượt trội giúp chuyển đổi doanh nghiệp. Từ chiến lược đến thực thi, chúng tôi là đối tác công nghệ của bạn.",
            "ft_company": "Công ty",
            "ft_services": "Dịch vụ",
            "ft_resources": "Tài nguyên",
            "ft_about": "Về chúng tôi", "ft_career": "Tuyển dụng",
            "ft_web": "Phát triển Web", "ft_mobile": "Ứng dụng di động", "ft_ui": "Thiết kế UI/UX", "ft_cloud": "Giải pháp Cloud",
            "ft_blog": "Blog", "ft_case": "Nghiên cứu dự án", "ft_doc": "Tài liệu", "ft_privacy": "Chính sách bảo mật",
            "ft_terms": "Điều khoản dịch vụ"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;