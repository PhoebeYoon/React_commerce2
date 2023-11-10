##### :cactus: React_Tutorial_Part3

###### 💔 해당 게시물 내용을 원하시면 저에게 문의해주세요 (재 사용가능하지만 )      

### :pencil: Material Icons 가져오는 사이트   

https://mui.com/material-ui/material-icons/

### 설치방법 :   
```  
>sudo npm install @mui/material @emotion/react @emotion/styled   or 
>npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

Navbar.js 에  
```   
import MenuIcon from '@mui/icons-material/Menu'    
<MenuIcon  className='menubar'/>   <--  적용할 스타일을 따로 지정한다
```   
https://mui.com/material-ui/getting-started/installation/

### 라우터에 사용되는 명령어정리 (vs 6버전): 
- BrowserRouter : 브라우저 History API를 사용해 현재 위치의 URL을 저장해주는 역할     
- Routes : 자식 route들을 구성하고 있는 단위    
- Route : path를 통해 URL을 분기시킬 수 있으며 컴포넌트 별로 원하는 url을 지정합니다       
- Link: 클릭시 지정한 URL로 이동하는 링크를 생성합니다 기존 컴포넌트의 상태값은 없어집니다  


:pencil: 그동안 Router에서 사용했던 Switch문은 더이상 사용하지 않습니다 
