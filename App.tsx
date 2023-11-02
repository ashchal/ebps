import React from 'react'

import Root from './src'

const App = () => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    )
  }

  return <Root />
}

export default App
