import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { API_URL } from '../../lib/constants/api';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const title = data.get('title') as string;
		const content = data.get('content') as string;
		const accessToken = event.cookies.get('session');
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		};

		try {
			const response = await axios.post(
				`${API_URL}/todos`,

				{
					title: title,
					content: content,
				},

				{
					headers,
				},
			);
		} catch (error) {
			return fail(400, { message: 'message' });
		}
		throw redirect(302, '/');
	},
} satisfies Actions;
