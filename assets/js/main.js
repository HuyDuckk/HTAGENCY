// ===== ALPINE APP =====
function htApp() {
  return {
    scrolled: false,
    mobileOpen: false,

    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    },

    submitForm() {
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc. 🎉');
    }
  };
}

// ===== COUNTER APP =====
function counterApp() {
  return {
    stats: [
      { target: 200, display: 200, suffix: '+', label: 'Khách hàng tin tưởng' },
      { target: 500, display: 500, suffix: '+', label: 'Chiến dịch thành công' },
      { target: 150, display: 150, suffix: '%', label: 'ROI trung bình' },
      { target: 5, display: 5, suffix: '+', label: 'Năm kinh nghiệm' },
    ],
    started: false,

    init() {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !this.started) {
          this.started = true;
          this.stats.forEach((s, i) => { this.stats[i].display = 0; });
          this.startCounters();
        }
      }, { threshold: 0.3 });
      observer.observe(this.$el);
    },

    startCounters() {
      this.stats.forEach((stat, idx) => {
        const duration = 1800;
        const steps = 60;
        const stepValue = stat.target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(interval);
          }
          this.stats[idx].display = Math.floor(current);
        }, duration / steps);
      });
    }
  };
}

// ===== SCROLL FADE ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
});
