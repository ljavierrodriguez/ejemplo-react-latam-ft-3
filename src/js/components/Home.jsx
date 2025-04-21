import Encabezado from "./Encabezado"
import Input from "./Input"
import Lista from "./Lista"

const Home = () => {
	return (
		<>
			<h1>Hola desde React</h1>
			<Lista />
			<Input type="password" name="password" placeholder="Password" />
			<Input type="email" name="Email" placeholder="Email" />
			<Encabezado texto="Hola Mundo desde Props" />
		</>
	)
}

export default Home
