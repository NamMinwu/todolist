import { ArchiveBoxArrowDown } from 'svelte-hero-icons';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';
import { API_URL } from '../../lib/constants/api';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			const response = await axios.post(`${API_URL}/auth`, {
				email: email,
				password: password,
			});

			if (response.status === 201) {
				event.cookies.set('session', response.data.access_token);
			}
		} catch (error) {
			return fail(400, { message: 'message' });
		}
		throw redirect(302, '/');
	},
} satisfies Actions;
