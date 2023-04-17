##### :cactus: React_Tutorial_Part3

1. 시작하기

```js
> npx create-react-app pizzahouse
> cd pizzahouse
> code .
```  
또는, 
```js
>mkdir pizzahouse
>cd pizzahouse
> npx create-react-app .
```   
:pencil:  npx create-react-app .  (이렇게하면 해당 폴더의 이름으로 프로젝트가 만들어집니다 )  

그리고 아래 이미지를 참조하여 파일을 정리하시고 [App.js]의 내용을 변경합니다  

<img width="540" alt="스크린샷 2023-04-17 오후 9 16 18" src="https://user-images.githubusercontent.com/48478079/232481421-591c8a7b-447e-4027-935a-65a6fb861ece.png">  

[index.js]에서   

``` 
import ./index.css;
``` 
삭제합니다.   

2. components 폴더를 생성하고 파일을 생성합니다.  
vscode의 확장프로그램에서 'ES7 React/Redux/React-Native/JS snippets' 설치합니다   
📁components 📁Navbar.js  
```js
rfce 탭키 --> 해당 코드가 생성됩니다 
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
      </div>
      <div className="rightSide"></div>
    </div>
  )
}
export default Navbar
```
