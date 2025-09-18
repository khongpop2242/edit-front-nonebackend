import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ส่งข้อความ:", formData);
    alert("ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* แถวบน: 2 คอลัมน์ */}
        <div className="contact-two-col">
          {/* ซ้าย: ข้อมูลบริษัท */}
          <aside className="contact-left">
            <h1 className="title">ข้อมูลติดต่อเรา</h1>

            <div className="company-block">
              <p className="company-name">บริษัท ก้าวไกลเฟอร์นิเจอร์ จำกัด</p>
              <p>ข้อมูลและรายละเอียดบริษัท</p>
              <p>บรรทัด 1</p>
              <p>บรรทัด 2</p>
              <p>บรรทัด 3</p>
            </div>

            <h3 className="contactinfo-heading">Contact info</h3>
            <ul className="contact-icons">
  <li>
    <i className="fas fa-phone" aria-hidden="true" />
    <a href="tel:0987776656" className="phone-text">0987776656</a>
  </li>
  <li>
    <i className="fas fa-phone" aria-hidden="true" />
    <a href="tel:0963991916" className="phone-text">096-399-1916</a>
  </li>
  <li>
    <i className="fas fa-phone" aria-hidden="true" />
    <a href="tel:0963891916" className="phone-text">096-389-1916</a>
  </li>
  <li>
    <i className="fas fa-phone" aria-hidden="true" />
    <a href="tel:021234567" className="phone-text">02-123-4567</a>
  </li>
</ul>

          </aside>

          {/* ขวา: ฟอร์ม */}
          <section className="contact-right">
            <h2 className="form-heading">ส่งข้อความถึงเรา</h2>

            <form onSubmit={handleSubmit} className="vertical-form">
              <input
                type="text"
                name="name"
                placeholder="ชื่อ-นามสกุล *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="อีเมล์ *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="เบอร์โทร *"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="หัวข้อ *"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="พิมพ์ข้อความของคุณ ที่นี่ *"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="btn-submit">ส่งข้อความ</button>
            </form>
          </section>
        </div>

        {/* แถวล่าง: รูปบริษัท/หน้าร้าน */}
        <div className="company-hero">
          รูปบริษัท(หน้าร้าน)
          {/* ถ้ามีรูปจริงให้แทนที่ด้วย:
              <img src="/images/company/front.jpg" alt="รูปบริษัท(หน้าร้าน)" />
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
