# HT Ads Agency — Website Project Brief

## Tổng quan

**Tên thương hiệu:** HT Ads Agency
**Slogan gợi ý:** "Tăng trưởng thực sự. Kết quả đo được." hoặc "Quảng cáo hiệu quả — Tăng trưởng bứt phá"
**Ngôn ngữ chính:** Tiếng Việt (có thể bổ sung EN toggle)
**Màu thương hiệu:** Blue gradient #2563EB → Cyan #06B6D4 (từ logo), chữ đen #111827

---

## Brand Identity

### Logo
- **Logo ngang (horizontal):** HT icon + chữ "Agency" bên phải — dùng cho header, email signature
- **Logo vuông compact:** HT icon + "Agency" text — dùng cho avatar, favicon, social media
- **Logo stacked (icon trên, text dưới):** Dùng cho in ấn, backdrop, profile hình vuông
- **Màu logo:** Gradient xanh dương #2563EB đến cyan #06B6D4, text đen #000000
- **File logo:** `/assets/logo/logo-horizontal.png`, `/assets/logo/logo-square.png`, `/assets/logo/logo-stacked.png`

### Palette màu
```
Primary Blue:   #2563EB
Cyan Accent:    #06B6D4
Gradient:       linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)
Dark Text:      #111827
Gray:           #6B7280
Light BG:       #F9FAFB
White:          #FFFFFF
```

### Typography
- **Heading:** Inter hoặc Be Vietnam Pro — Bold/ExtraBold
- **Body:** Inter Regular/Medium
- **Accent:** Có thể dùng gradient text trên headline chính

---

## Cấu trúc website

### 1. Header / Navigation
- Logo ngang bên trái
- Menu: Trang chủ | Dịch vụ | Về chúng tôi | Case Study | Blog | Liên hệ
- CTA button: "Nhận tư vấn miễn phí" (gradient blue)
- Sticky header với blur backdrop

### 2. Hero Section
- Headline lớn: "Agency quảng cáo số **tăng trưởng thực sự**"
- Sub-headline: Giải pháp Digital Marketing toàn diện — Facebook Ads, Google Ads, TikTok Ads, SEO, Content
- 2 CTA: "Bắt đầu ngay" (primary) + "Xem case study" (outline)
- Background: Animated gradient hoặc mesh gradient xanh/cyan
- Stats ticker: Số khách hàng, số chiến dịch, ROI trung bình

### 3. Thanh số liệu (Social Proof Bar)
- 200+ Khách hàng tin tưởng
- 500+ Chiến dịch thành công
- 150% ROI trung bình
- 5+ Năm kinh nghiệm
- Hiệu ứng count-up khi scroll vào

### 4. Dịch vụ (Services)
Card grid 3 cột, mỗi card có icon gradient:

| Dịch vụ | Mô tả ngắn |
|---|---|
| Facebook & Instagram Ads | Tiếp cận đúng khách hàng mục tiêu, tối ưu chi phí CPL |
| Google Ads (Search/Display) | Xuất hiện top khi khách hàng tìm kiếm |
| TikTok Ads | Content viral, chạm đến Gen Z & Millennial |
| SEO & Content Marketing | Tăng traffic organic bền vững |
| Thiết kế sáng tạo | Banner, video, landing page chuyển đổi cao |
| Tư vấn chiến lược | Phân tích thị trường, lập kế hoạch tổng thể |

### 5. Quy trình làm việc (How We Work)
4 bước dạng timeline/stepper:
1. **Phân tích** — Nghiên cứu thị trường, đối thủ, insight khách hàng
2. **Lên chiến lược** — Xây dựng kế hoạch tổng thể theo mục tiêu
3. **Triển khai** — Chạy chiến dịch, tối ưu liên tục
4. **Báo cáo** — Dashboard real-time, báo cáo định kỳ minh bạch

### 6. Tại sao chọn HT Ads?
3 cột USP với icon:
- Cam kết kết quả đo được (KPI rõ ràng trước khi ký hợp đồng)
- Đội ngũ chuyên gia dày dặn kinh nghiệm
- Hỗ trợ 24/7, báo cáo minh bạch hàng tuần

### 7. Case Study / Portfolio
- Grid 2-3 cột với thumbnail
- Filter theo: Facebook Ads | Google Ads | TikTok | SEO
- Mỗi case: Logo brand + kết quả nổi bật (VD: "ROAS 8.5x", "CPL giảm 40%")

### 8. Khách hàng tin tưởng (Logos)
- Thanh cuộn logo marquee các brand đã hợp tác
- Nền trắng hoặc xám nhạt

### 9. Testimonials
- Carousel/slider với ảnh avatar, tên, chức vụ, công ty
- Rating 5 sao
- Quote nổi bật về kết quả đạt được

### 10. Blog / Insights (preview)
- 3 bài viết mới nhất dạng card
- Tag: Facebook Ads | Google | TikTok | Chiến lược

### 11. CTA Section cuối trang
- Background gradient xanh đậm
- Headline: "Sẵn sàng tăng trưởng cùng HT Agency?"
- Form liên hệ nhanh: Tên + SĐT + Dịch vụ quan tâm + Gửi
- Hoặc link đến Zalo/Messenger

### 12. Footer
- Logo + slogan
- Cột links: Dịch vụ | Công ty | Blog | Liên hệ
- Thông tin: Địa chỉ, SĐT, Email
- Social icons: Facebook, TikTok, YouTube, LinkedIn
- Copyright © 2024 HT Ads Agency

---

## Trang con

### /dich-vu/facebook-ads
### /dich-vu/google-ads
### /dich-vu/tiktok-ads
### /dich-vu/seo
### /ve-chung-toi
### /case-study
### /blog
### /lien-he

---

## Tech Stack gợi ý

**Option A — Static (nhanh, SEO tốt):**
- HTML5 + Tailwind CSS
- Alpine.js cho interactivity nhẹ
- Deploy: GitHub Pages hoặc Netlify

**Option B — CMS (dễ quản lý content):**
- Next.js (React) + Tailwind CSS
- CMS: Sanity.io hoặc Contentful (cho blog/case study)
- Deploy: Vercel

**Option C — WordPress:**
- Elementor Pro hoặc Bricks Builder
- Plugin SEO: Rank Math
- Hosting: VPS hoặc Kinsta

---

## SEO Keywords mục tiêu

- "dịch vụ chạy quảng cáo facebook"
- "agency quảng cáo tphcm"
- "dịch vụ google ads"
- "công ty marketing online"
- "chạy quảng cáo tiktok"
- "agency digital marketing vietnam"

---

## Tham khảo cạnh tranh

- azsagency.vn — Layout, services, tone tiếng Việt
- novaon.com — Enterprise feel, case study mạnh
- dinos.vn — Clean, conversion-focused

---

## Assets cần chuẩn bị

- [ ] Logo files (PNG transparent + SVG): ngang, vuông, stacked
- [ ] Favicon ICO/PNG 32x32
- [ ] OG image 1200x630
- [ ] Ảnh team
- [ ] Ảnh/video hero background
- [ ] Logo khách hàng đã hợp tác
- [ ] Screenshots/data cho case study
- [ ] Headshots/avatar cho testimonials

---

## Ghi chú phát triển

- Mobile-first, responsive hoàn toàn
- Page speed target: > 90 điểm Lighthouse
- Tích hợp Facebook Pixel + Google Analytics 4
- Form liên hệ kết nối Zalo OA hoặc email marketing
- Chat widget: Zalo hoặc Tawk.to
