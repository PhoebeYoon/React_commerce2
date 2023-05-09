##### :cactus: React_Tutorial_Part3

###### 💔 해당 게시물을 무단으로 도용하지 마세요    

:file_folder:pages 안에 Contact.js 파일을 생성합니다.  

[Contact.js]
```js
import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage:`url( ${PizzaLeft})`}}> </div>
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
  )
}
export default Contact
```    
[App.js] 아래 내용을 추가합니다 
```js
import Contact from './pages/Contact'
 <Route  path="/contact" element={<Contact />} />
```

<img width="350" alt="스크린샷 2023-04-25 오후 9 39 48" src="https://user-images.githubusercontent.com/48478079/234278729-bd1327dc-10d6-4961-a575-d10209bbda9f.png">


