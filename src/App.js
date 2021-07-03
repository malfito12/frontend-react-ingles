import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppBarMenu from './Components/Organimsm/AppBarMenu'
import Palabras from './Components/Pages/Vocabulario/Palabras'
import MainMenu from './Components/Pages/MainMenu'
import Verbos from './Components/Pages/Verbos'
import ToBeVerbs from './Components/Pages/Basico/ToBeVerbs'
import ProNombres from './Components/Pages/Basico/ProNombres'
import Deportes from './Components/Pages/Vocabulario/Deportes'
import Dias from './Components/Pages/Vocabulario/Dias'
import Fechas from './Components/Pages/Vocabulario/Fechas'
import Nacionalidades from './Components/Pages/Vocabulario/Nacionalidades'
import Numeros from './Components/Pages/Vocabulario/Numeros'
import PartesDelCuerpo from './Components/Pages/Vocabulario/PartesDelCuerpo'
import SaludosYdesp from './Components/Pages/Vocabulario/SaludosYdesp'

const App = () => {
  return (
    <Router>
      <AppBarMenu />
      <Switch>
        <Route path='/' exact component={MainMenu} />
        <Route path='/verbos' component={Verbos} />
        <Route path='/palabras' component={Palabras} />

        {/* ---------------------VOCABULARIO------------------------------------ */}
        <Route path='/palabras' exact component={Palabras} />
        <Route path='/deportes' component={Deportes} />
        <Route path='/dias' component={Dias} />
        <Route path='/fechas' component={Fechas} />
        <Route path='/nacionalidades' component={Nacionalidades} />
        <Route path='/numeros' component={Numeros} />
        <Route path='/partesdelcuerpo' component={PartesDelCuerpo} />
        <Route path='/saludosydespedidas' component={SaludosYdesp} />
        {/* ---------------------Basico------------------------------------ */}
        <Route path='/tobeverbs' exact component={ToBeVerbs} />
        <Route path='/proNombres' component={ProNombres} />
      </Switch>
    </Router>
  )
}

export default App
