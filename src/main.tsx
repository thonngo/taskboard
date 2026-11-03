import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@app/App'
import { QueryClientProvider } from '@tanstack/react-query'
import {queryClient} from '@shared/api'

const enableMocking = async() => {
  if (import.meta.env.DEV) {
    const { worker } = await import('@shared/mocks/browser')
    return worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  )
})
