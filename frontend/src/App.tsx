import './App.css'

function BandList() { 
  const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Dire strates', 'R.E.M', 'Collective Soul']

  return ( 
    <div>
    <h2>{bandNames[0]}</h2>
    <h2>{bandNames[1]}</h2>
    <h2>{bandNames[2]}</h2>
    <h2>{bandNames[3]}</h2>
    <h2>{bandNames[4]}</h2>
    <h2>{bandNames[5]}</h2>
    </div>
  )
}

function App() {

  return (
    <>
    <BandList />
    </>
  )
}

export default App
