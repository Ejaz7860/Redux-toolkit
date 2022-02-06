## **Counter App using Redux-toolkit**

![Screenshot (46)](https://user-images.githubusercontent.com/89910095/152670005-c0f46328-f984-42f6-9e78-751672157f9e.png)


## Installation
### npx create-react-app my-app --template redux

1. **Create a Redux Store
  -src/app/store.js.
  -configureStore API from Redux Toolkit.

**import { configureStore } from '@reduxjs/toolkit'

***export const store = configureStore({
  reducer: {},
})***

2. **Provide the Redux Store to React
   -import { store} from './app/store'
   -import { provider from 'react-redux'

***ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)***

3. **Create a Redux State Slice**

![Screenshot (49)](https://user-images.githubusercontent.com/89910095/152669999-859ec8d7-44a8-4358-b2d3-cd7c56b1f1ca.png)

4. **Add Slice Reducers to the Store**

![Screenshot (48)](https://user-images.githubusercontent.com/89910095/152670055-aa170bf2-10fa-4018-8c09-36539b5b0411.png)

5. **Use Redux State and Actions in Components**
   -We can read data from the store with useSelector.
   -dispatch actions using UseDispatch.
   
   ![Screenshot (49)](https://user-images.githubusercontent.com/89910095/152670108-1750f9ed-f052-4db0-ab06-b09766f7c818.png)
   
   ## THIS IS ALL ABOUT THE COUNTER APP AND HOW TO USE REDUX-TOOLKIT.

