import { useState } from 'react'
import './App.css'



export default function App() {
	const [show, setShow] = useState(true);

	return (
		<>
			<button onClick={() => setShow(!show)}>
				{show ? "Hide Element Bellow" : " Show Element Below"}
			</button>
			{show && <div>Toggle Change</div>}
		</>
	)
}
