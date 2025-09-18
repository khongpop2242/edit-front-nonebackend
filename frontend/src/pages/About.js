import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container hero-inner">
          <h1 className="hero-title">ก้าวไกลออฟฟิศเฟอร์นิเจอร์</h1>
          <div className="hero-photo">รูปบริษัท</div>
        </div>
      </section>

      {/* INTRO (ข้อความกลางสั้น ๆ เหมือนภาพ) */}
      <section className="about-intro">
        <div className="container">
          <h2 className="intro-brand">ก้าวไกลออฟฟิศเฟอร์นิเจอร์</h2>
          <p className="intro-line">
            พบกับโชว์รูมเฟอร์นิเจอร์คุณภาพ สำหรับบ้าน คอนโด และสำนักงาน
          </p>
          <p className="intro-line">
            พร้อมบริการ ที่ตอบโจทย์ ราคาสบายกระเป๋า
          </p>
          <p className="intro-line">
            เรามีสินค้าให้เลือกหลากหลาย เช่น โต๊ะ เก้าอี้ ตู้ ชั้นวางของ
          </p>
        </div>
      </section>

      {/* PRODUCT COLLAGE */}
      <section className="about-collage">
        <div className="container collage-grid">
          {/* เปลี่ยน src ให้เป็นรูปจริงของคุณได้เลย */}
          <img src="/images/about/desk-1.png" alt="โต๊ะทำงาน 1" />
          <img src="/images/about/desk-2.png" alt="โต๊ะทำงาน 2" />
          <img src="/images/about/desk-3.png" alt="โต๊ะทำงาน 3" />
          <img src="/images/about/desk-4.png" alt="โต๊ะทำงาน 4" />
          <img src="/images/about/desk-5.png" alt="โต๊ะทำงาน 5" />
          <img src="/images/about/desk-6.png" alt="โต๊ะทำงาน 6" />
          <img src="/images/about/desk-7.png" alt="โต๊ะทำงาน 7" />
          <img src="/images/about/desk-8.png" alt="โต๊ะทำงาน 8" />
        </div>
      </section>

      {/* FEATURES (คงของเดิมไว้) */}
      <section className="about-features">
        <div className="container">
          <h2>จุดเด่นของเรา</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-medal"></i>
              <h3>คุณภาพสูง</h3>
              <p>เฟอร์นิเจอร์ทุกชิ้นผ่านการคัดสรรและทดสอบคุณภาพอย่างเข้มงวด</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-tags"></i>
              <h3>ราคาเป็นมิตร</h3>
              <p>ราคาโรงงาน ต้นทุนต่ำ กำไรน้อย เพื่อลูกค้า</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-truck"></i>
              <h3>บริการจัดส่ง</h3>
              <p>จัดส่งทั่วประเทศ ปลอดภัย ตรงเวลา</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-headset"></i>
              <h3>บริการหลังการขาย</h3>
              <p>รับประกัน 1 ปี และบริการซ่อมบำรุง</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
