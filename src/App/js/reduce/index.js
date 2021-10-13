import {combineReducers} from 'redux';
import articlesReduce from './articles';

const allReduce = combineReducers({
    articles: articlesReduce
})

export default allReduce;