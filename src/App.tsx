import { Calculator } from './components/Calculator.tsx';
import { OperationHistory } from './components/OperationHistory.tsx';
import './App.css';

function App() {

  return (
    <main className='py-28 px-4 flex sm:flex-row items-center sm:items-stretch gap-2 sm:px-60 bg-linear-[180deg,#807ECE_0%,#8E7ECE_100%] min-h-screen' >
      <Calculator />
      <OperationHistory />
    </main>
  )
}

export default App
