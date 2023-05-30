import { ArchiveBoxArrowDown } from 'svelte-hero-icons';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			const response = await axios.post('http://54.180.121.245:3000/auth', {
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
