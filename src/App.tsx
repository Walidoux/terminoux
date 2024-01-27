import { Fragment, useState } from 'react'
import { invoke } from '@tauri-apps/api'
import type { Event } from '@tauri-apps/api/event'
import { listen } from '@tauri-apps/api/event'

import { Tabs } from './components/Tabs'
import { TerminalField } from './components/TerminalField/TerminalField'

const App: React.FC = () => {
  /* const greet = async (): Promise<void> =>
    setGreetMsg(await invoke('greet', { name })) */

  const [value, setValue] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    setValue('')
    setResponse('')
  }

  listen('data', (event: Event<string>) => {
    console.log(event)

    return setResponse(event.payload)
  }).catch((error) => {
    return console.log(error)
  })

  return (
    <Fragment>
      <Tabs />
      <TerminalField />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={async (event) => {
            setValue(event.target.value)
            return await invoke('async_write_to_pty', { data: value })
          }}
        />
      </form>

      <p className='text-white'>{response}</p>
    </Fragment>
  )
}

export default App
