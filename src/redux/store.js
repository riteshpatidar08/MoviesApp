import {createStore} from 'redux' ;

import { queryReducer } from './queryReducer';


const store = createStore(queryReducer) ;


export default store