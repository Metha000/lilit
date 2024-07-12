import Navbar from '/app/component/nav';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            About
          </h2>
          <img
            src="/img/14.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          ดอกไม้มีความหมายที่ลึกซึ้งและสามารถส่งผ่านความรู้สึกและข้อความต่าง ๆ ได้ตามชนิดและสีของดอกไม้ แถมดอกไม้สามารถใช้เพื่อสื่อสารความรู้สึกในโอกาสต่าง ๆ เช่น การแสดงความยินดี การแสดงความเสียใจ การขอโทษ หรือแม้กระทั่งการขอบคุณ การเลือกดอกไม้ที่เหมาะสมจะช่วยให้ข้อความที่ต้องการส่งผ่านไปถึงผู้รับได้อย่างชัดเจนและมีความหมาย
          </p>
          <a href="contact.html" className="btn btn-primary">
           like
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
