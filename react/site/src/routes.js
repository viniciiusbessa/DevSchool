import {BrowserRouter, Switch, Route} from 'react-router-dom';

import IndexConteudo from '../src/pages/DS/index';
export default function Routes(){
    return ( 
        <BrowserRouter>
         <Switch>
           <Route path="/" exact={true} component={IndexConteudo}/>
         </Switch> 
        </BrowserRouter>
    )
}
