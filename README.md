##### :cactus: React_Tutorial_Part3

###### 💔 해당 게시물을 무단으로 도용하지 마세요   
1.
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

2.
📁src 📁sub 안에 MenuList.js 파일을 생성합니다.   
이 파일은 각 메뉴의 이름과 가격, 이미지를 담고있습니다.
[MenuList.js]

```js
export const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15000,
  },
  {
    name: "Margherita Pizza",
    image: Margherita,
    price: 11000,
  },
  {
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 25000,
  },
  {
    name: "Vegan Pizza",
    image: Vegan,
    price: 17000,
  },
  {
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 14000,
  },
  {
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 99000,
  },
];

```  
위의 내용중에는 이미지가 들어가야 합니다. 그래서 image항목의 해당하는 이름으로 경로와함께 해당 이미지를 불러와야 합니다.  
아래의 내용을 파일의 맨위에 삽입합니다.  
[MenuList.js] 

```js
import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg"; 
중략
```  


3. 
[App.js] 에 다음의 내용을 추가합니다.
```js
import Menu from './pages/Menu'

<Route  path="/menu" element={<Menu />} />
```

[Menu.js]
```js
import React from 'react'
import { MenuList} from '../sub/MenuList.js'

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menutitle">
        Our Menu
      </h1>
      <div className='menuList'>
      </div>
    </div>
  )
}

export default Menu

```
'메뉴'를 클릭했을때 아래와 같이 나오는지 확인합니다.  


<img width="410" alt="스크린샷 2023-04-25 오후 8 34 40" src="https://user-images.githubusercontent.com/48478079/234264513-09421e1e-8ea6-46c7-8f8d-2dd539b1d0cc.png">   

불러온 MenuList.js 안에는 많은 항목이 있기때문에 { MenuList } 이렇게적는다고 내용을 나열하지는 않습니다. 이미 자바스크립트에서 학습이 된 내용일것입니다.  그래서 내용을 나열하기 위해 map()함수를 사용해야 합니다.   
아래와 같이 내용을 변경합니다.  

```js
<div className='menuList'>
        {MenuList.map((item, key)=>{
          return ( <div> {item.name}</div> )
        })}
      </div>
```
실행결과를 확인하면 아래와 같이 나옵니다. 이름만 적었기 때문에 이름만 나옵니다. 

<img width="300" alt="스크린샷 2023-04-25 오후 8 40 27" src="https://user-images.githubusercontent.com/48478079/234265594-48750ba3-3047-4e14-9926-227e93ac234e.png">

4. 
내용이 출력되는 것이 확인되었으니 이것에 형식을 입히도록 하겠습니다. 이를 위해 
📁components 안에 MenuItem.js 파일을 생성합니다.  

[ MenuItem.js ]
```js
import React from 'react'

function MenuItem({image,name,price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage :`url( ${image})`}}></div>
        <h1>{name}</h1>
        <p>₩{price}</p>
    </div>
  )
}

export default MenuItem

```   
여기에 들어갈 내용은 MenuList.js가 가지고 있습니다.  
[ Menu.js]의 내용을 변경합니다.  

```js
import React from 'react'
import { MenuList} from '../sub/MenuList'
import MenuItem  from '../components/MenuItem'

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menutitle">Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuitem, key)=>{
          return <MenuItem />
        })}
      </div>
    </div>
  )
}
export default Menu
```  


이것의 결과를 개발자도구에서 확인해보면 내용은 비어있지만 코드는 모두 들어가 있습니다.   
<img width="500" alt="스크린샷 2023-04-25 오후 8 59 06" src="https://user-images.githubusercontent.com/48478079/234269617-c1e24315-5f4b-4763-ac88-f8f664b0132b.png">

4. 
이제 비어있는 태그에 내용만 넣어주면 됩니다. 형식을 갖고 있는 MenuItem.js은     
function MenuItem({image, naem, price}) 와 같이 3개의 인자를 필요로 합니다. 
전달될 내용은 MenuList.js가 가지고 있고 이 두개의 파일은 Menu.js안에 모두 삽입되어 있습니다.  

[Menu.js]를 아래와 같이 변경합니다     

```js
import '../styles/Menu.css'

<div className='menuList'>
        {MenuList.map((menuitem, key)=>{
          return <MenuItem image={menuitem.image} name={menuitem.name} price={menuitem.price}/>
        })}
</div>

```   

<img width="400" alt="스크린샷 2023-04-25 오후 9 12 46" src="https://user-images.githubusercontent.com/48478079/234272718-92fc4e0d-842b-4c1b-859d-86d59b3a69c1.png">


