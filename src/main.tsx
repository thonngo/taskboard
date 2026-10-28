import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@app/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Время, в течение которого данные считаются «свежими»
      // Пока данные свежие, повторный запрос не выполняется
      staleTime: 1000 * 60 * 5, // 5 минут

      // Время хранения неиспользуемых данных в кэше
      gcTime: 1000 * 60 * 10, // 10 минут

      // Количество повторных попыток при ошибке
      retry: 3,

      // Задержка между повторными попытками (экспоненциальная)
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

      // Обновлять данные при фокусе окна браузера
      refetchOnWindowFocus: true,

      // Обновлять данные при восстановлении сетевого соединения
      refetchOnReconnect: true,
    }
  }
})

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
