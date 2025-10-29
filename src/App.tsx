import { Text } from './components/Text.tsx'
import './App.css';
import { Button } from './components/Button.tsx';
import { Card } from './components/Card.tsx';

function App() {

  return (
    <div className='bg-(--background)'>
      <Text variant='heading'>Histórico de Operações</Text>
      <Button textVariant='heading' className='flex items-center justify-center rounded-xl p-3 cursor-pointer'>Calcular</Button>
      <Card>minha solidão consome o que restou do meu coração</Card>
    </div>
  )
}

export default App
