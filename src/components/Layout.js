import { Link, Outlet } from "react-router-dom"


export default function Layout() {
	return (
		<div>
			<nav>
				<menu>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</menu>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	)
}