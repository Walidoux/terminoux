import { Fragment } from 'react'

import { Tabs } from './components/Tabs'
import { TerminalField } from './components/TerminalField/TerminalField'

const App: React.FC = () => {
  /* const greet = async (): Promise<void> =>
    setGreetMsg(await invoke('greet', { name })) */

  return (
    <Fragment>
      <Tabs />
      <TerminalField />
    </Fragment>
  )
}

export default App
