
import './App.css'
import Landing from './Components/Landing'
import Error from './Components/Error'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom' ;
function App() {
  

  return (
    <>
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component={<Landing/>} />
                <Route path="*" component={<Error />} />
            </Switch>
        </BrowserRouter>
    </>
  )
}

export default App
