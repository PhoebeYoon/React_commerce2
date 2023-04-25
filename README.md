##### :cactus: React_Tutorial_Part3


1. 
[Navbar.js] 의 내용 중 아래처럼 내용을 변경합니다. hiddenLinks에는 이전에 삽입했던 아이콘을 클릭했을때 메뉴가 보이도록 변경할 것입니다.
```js
 <div className="leftSide">
        <img src={Logo} />
        <div class="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
 </div>
```   
2. 
leftSide의 메뉴는 button를 클릭하면 보이거나 감추도록 할 것인데, 이것을 하려면 상태를 변경해야 합니다. 그래서 useState 를 사용해야 합니다.

[Navbar.js]

```js
import React ,{ useState }from 'react'
function Navar() {
  const [openLinks, setOpenLinks]=useState(false)
  return (
    <div>
       <div className='navbar'>
          <div className="leftSide" id={openLinks? "open":'close'}>
            <img src={Logo} />
  중략
```   
이와같이 변경합니다.  
기본상태인 useState(false) 와 useState(true)을 변경해가며 개발자도구에서 상태를 확인하시기 바랍니다.  

<img width="400" alt="스크린샷 2023-04-25 오후 6 37 46" src="https://user-images.githubusercontent.com/48478079/234238476-561b0200-96bf-47ad-a8e8-e4e785c1b264.png">  

<img width="400" alt="스크린샷 2023-04-25 오후 6 38 35" src="https://user-images.githubusercontent.com/48478079/234238544-2d40d795-07ee-4e47-8ca2-268525fcf087.png">


3. 
이제 햄버거아이콘을 클릭했을때 위의 openLinks의 상태가 변경되도록 해야 합니다.  
[Navbar.js]  
```js
// return문 전에 삽입
const toggleNavbar =()=>{
    setOpenLinks(!openLinks)
  }
...

<button onClick={setOpenLinks}>
     <MenuIcon />
</button>
```   
개발자도구를 열고 아이콘을 클릭하여 id='open' 또는 'close'로 변경되는지 확인합니다.  



