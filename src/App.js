import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Analitics from "./Pages/Analitics";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Analitics />
    </QueryClientProvider>
  );
}

export default App;
