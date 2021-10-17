import { BrowserRouter, Switch, Route} from "react-router-dom";
import React, {useState, Suspense, lazy} from "react";

import UserContext from "../../contexts/UserContext";
import GlobalStyle, {Container} from "../Styles/GlobalStyle";

import Home from "../Home/Home";

export default function App(){
	const [user, setUser] = useState(null);
	const [progress, setProgress] = useState(0);

	const SignUp = lazy(() => import("../SignUp/SignUp"));
	const Habit = lazy(() => import("../Habit/Habit"));
	const Today = lazy(() => import("../Today/Today"));
	const Historic = lazy(() => import("../Historic/Historic"));

	return(
		<UserContext.Provider value={{user, setUser, progress, setProgress}}>
			<GlobalStyle/>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Container>
								<Route path="/" exact component={Home} />
								<Route path="/cadastro" exact component={SignUp} />
								<Route path="/habitos" exact component={Habit} />
								<Route path="/hoje" exact component={Today} />
								<Route path="/historico" exact component={Historic}/>
						</Container>
					</Switch>
				</Suspense>   
			</BrowserRouter>
		</UserContext.Provider>
	);
}