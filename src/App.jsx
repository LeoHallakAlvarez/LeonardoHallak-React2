import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Temp Components
import { ANNOUNCEMENT } from './utils/globalConstants'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'
import ReportErrorButton from './components/ReportErrorButton/ReportErrorButton'

// Components
import NavBar from './components/NavBar/NavBar'
import Greeting from './components/Greeting/Greeting'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App () {
  return (
    <div>
      {
        ANNOUNCEMENT.active &&
          <AnnouncementBar style={ANNOUNCEMENT.style.secondary}>
            <p>{ANNOUNCEMENT.title}</p>
            {ANNOUNCEMENT.showReportErrorButton && <ReportErrorButton />}
          </AnnouncementBar>
      }
      <div className='container flex flex-col gap-5 m-auto max-w-7xl'>
        <BrowserRouter>
          <NavBar />
          <Greeting />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 - NO ENCONTRADO</h1>} />
          </Routes>
        </BrowserRouter>

        {/* TEST ItemListCointainer */}
        {/*       <ItemListContainer>
        <Greeting />
      </ItemListContainer> */}

        {/* TEST ItemDetailContainer - para probar datos de productos */}
        {/* <ItemDetailContainer productId='alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti' /> */}
        {/* <ItemDetailContainer productId='msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb' /> */}
        {/* <ItemDetailContainer productId='lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti' /> */}
        {/* <ItemDetailContainer productId='asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb' /> */}
        {/* <ItemDetailContainer productId='asus-zenbook-flip-2en1-ryzen-7-5700u-8gb-256gb-geforce-mx450' /> */}
        {/* <ItemDetailContainer productId='lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd' /> */}

      </div>
    </div>
  )
}

export default App