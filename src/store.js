import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const middleware = applyMiddleware(reduxThunk);

const store = createStore(rootReducer, composeWithDevTools(middleware))

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     composeWithDevTools(
//     applyMiddleware(thunk))
//   );
// }

export default store;