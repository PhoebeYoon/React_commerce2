##### :cactus: React_Tutorial_Part3

:file_folder:pages에 Menu.js파일을 생성합니다. 기본형태는 아래와 같습니다.   
[Menu.js]  

```js
import React from 'react'

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menutitle">
        Our Menu
      </h1>
      <div>
       여기에 메뉴들이 나열됩니다.
      </div>
    </div>
  )
}

export default Menu
```   
다음내용이 이해하기 좀 어려울수 있습니다.   
사용자가 선택할 수 있는 피자의 메뉴에는 이미지,가격, 피자이름등이 들어갑니다.   
메뉴의 종류가 10개이든 100개이든간에 각각의 메뉴는 모두 이미지,가격,이름을 모두 가져야 합니다.   
그래서 이런 내용을 계속 나열하기보다는 각 메뉴에 들어가야 하는 형식을 따로 저장해놓고 이것을 반복적으로 사용하도록 할 것입니다.  
이해를 돕기위해 결과화면을 보면  
<img width="400" alt="스크린샷 2023-04-24 오후 11 25 50" src="https://user-images.githubusercontent.com/48478079/234257617-5db981c9-cd7f-48d1-b23f-c61097cb5d23.png">
