import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useGetCabins } from './hooks/useCabins'

function App() {
  const {cabins,error,isLoading} = useGetCabins();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <div className="card">
        {isLoading && <p>Loading...</p>}
        {error && <p>There is an error...</p>}
        {cabins && cabins.map(cabin=>{
          return <p key={cabin.id}>{cabin.name}</p>
        })}
      </div>
    </>
  )
}

export default App
