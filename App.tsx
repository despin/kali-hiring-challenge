/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import Navigation from './src/navigation';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './src/store';
import {Provider} from 'react-redux';

let persistor = persistStore(store);

const App = () => {
  // return (
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <Navigation />
  //     </PersistGate>
  //   </Provider>
  // );

  return <Navigation />;
};

export default App;
