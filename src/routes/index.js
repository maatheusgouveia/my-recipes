import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import NewRecipe from '../pages/NewRecipe';
import FavoriteRecipes from '../pages/FavoriteRecipes';

import DefaultLayout from '../components/_layouts/Default';

export default function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				exact
				element={
					<DefaultLayout>
						<Home />
					</DefaultLayout>
				}
			/>

			<Route
				path="/recipe/:id"
				exact
				element={
					<DefaultLayout>
						<Recipe />
					</DefaultLayout>
				}
			/>

			<Route
				path="/new/recipe/"
				exact
				element={
					<DefaultLayout>
						<NewRecipe />
					</DefaultLayout>
				}
			/>

			<Route
				path="/me/favorites/"
				exact
				element={
					<DefaultLayout>
						<FavoriteRecipes />
					</DefaultLayout>
				}
			/>

			<Route
				path="/*"
				element={
					<DefaultLayout>
						<h1>Page not found</h1>
					</DefaultLayout>
				}
			/>
		</Routes>
	);
}
