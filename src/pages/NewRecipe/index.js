import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Container, InputContainer, Title, SaveButton } from './styles';

export default function NewRecipe() {
	const initialValues = {
		title: '',
		category: '',
		ingredients: '',
		instructions: '',
		portions: '',
		cooking_time: '',
	};

	const validationSchema = yup.object({
		title: yup.string().required(),
		category: yup.string().required(),
		ingredients: yup.string().required(),
		instructions: yup.string().required(),
		portions: yup.string().required(),
		cooking_time: yup.string().required(),
	});

	function handleSubmit(values, formik) {
		console.log(values, formik);
	}

	return (
		<Container>
			<Title>New Recipe</Title>

			<Formik
				onSubmit={handleSubmit}
				validateOnChange={false}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				{({ values, errors, handleChange }) => (
					<Form>
						<InputContainer>
							<input
								name="title"
								value={values.title}
								onChange={handleChange}
								placeholder="Recipe title"
							/>
						</InputContainer>

						<InputContainer>
							<select
								name="category"
								value={values.category}
								onChange={handleChange}
							>
								<option value="">Choose a category</option>
								<option value="Cake">Cake</option>
								<option value="Meat">Meat</option>
								<option value="Chicken">Chicken</option>
							</select>
						</InputContainer>

						<InputContainer>
							<textarea
								rows={8}
								name="ingredients"
								placeholder="Describe ingredients and quantity one per line. Ex: 1 spoon of sugar"
								value={values.ingredients}
								onChange={handleChange}
							/>
						</InputContainer>

						<InputContainer>
							<textarea
								rows={8}
								name="instructions"
								placeholder="Describe the steps of the recipe one per line"
								value={values.instructions}
								onChange={handleChange}
							/>
						</InputContainer>

						<InputContainer>
							<input
								name="cooking_time"
								type="number"
								placeholder="Cooking time in minutes"
								value={values.cooking_time}
								onChange={handleChange}
							/>

							<input
								min={0}
								name="portions"
								type="number"
								placeholder="Portions"
								value={values.portions}
								onChange={handleChange}
							/>
						</InputContainer>

						<SaveButton type="submit">Save</SaveButton>
					</Form>
				)}
			</Formik>
		</Container>
	);
}
