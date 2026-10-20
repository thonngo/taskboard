import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@app/App'


const enableMocking = async() => {
  if (import.meta.env.DEV) {
    const { worker } = await import('@shared/mocks/browser')
    return worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
