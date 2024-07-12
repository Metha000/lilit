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
            Service
          </h2>
          <img
            src="/img/544.jpg"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: '#666' }}>
          คุณสามารถค้นหาความหมายของดอกไม้ได้จากหลายแหล่งข้อมูล 
          1.เว็บไซต์และบล็อก Teleflora
          2.หนังสือ "The Language of Flowers" โดย Vanessa Diffenbaugh
          "Floriography: An Illustrated Guide to the Victorian Language of Flowers" โดย Jessica Roux
          3.ร้านดอกไม้
          4.บทความออนไลน์และนิตยสาร บทความในนิตยสารเกี่ยวกับการจัดสวนหรือดอกไม้ เช่น "Better Homes and Gardens" หรือ "Martha Stewart Living"
          </p>
          <a href="contact.html" className="btn btn-primary">
           more
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
