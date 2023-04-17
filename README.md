##### :cactus: React_Tutorial_Part3

1. 
```js
> npm install react-router-dom
``` 
localhost:3000/about 와 같은 경우 경로를 지정하여 다른 페이지를 보여줄때 Router 기능을 이용해야 한다.
2. 보여줄 페이지가 들어가는 폴더를 생성하고 그 안에 해당 페이지를 만들겠습니다 React Router Dom의 버전은 v6입니다 

:file_folder:src :file_folder: pages :file_folder:Home.js    
[Home.js]
```js
import React from 'react'

function Home() {
  return (
    <div>
      Home page
    </div>
  )
}

export default Home
```

[App.js]
 
```js
mport Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
         <Routes>
            <Route  path="/" element={ <Home />} />
         </Routes>
     </Router>
    </div>
  );
}

export default App;

```

