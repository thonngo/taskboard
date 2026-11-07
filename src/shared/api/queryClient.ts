import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
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
    },
  },
});
