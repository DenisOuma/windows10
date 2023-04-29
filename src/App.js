import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
function App() {
	return (
		<div className="App">
			<div className="App bg-primary-bg-page">
				<Router>
					<>
						<Routes>
							<Route exact path="/login" element={<LoginPage />} />
						</Routes>
					</>
				</Router>
			</div>
		</div>
	);
}

export default App;
