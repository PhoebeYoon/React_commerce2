import React from "react";
import PizzaLeft from "../assets/pizza4.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">고객성명</label>
          <input name="name" placeholder="성함" type="text" />
          <label htmlFor="email">이메일주소</label>
          <input name="email" placeholder="이메일주소" type="email" />
          <label htmlFor="message">상담내역</label>
          <textarea
            rows="6"
            placeholder="메시지를 입력하세요"
            name="message"
            required
          ></textarea>
          <button type="submit"> 메시지보내기</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
