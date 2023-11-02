import { createRoot} from 'react-dom/client';
import { Core } from './components/Core'

const index  = () => {
    return (
        <Core />
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<Core />)