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
		const name = data.get('name') as string;
		const confirmPassword = data.get('confirmPassword') as string;

		if (password !== confirmPassword) {
			return fail(400, { message: 'Not a match password' });
		}
		try {
			const response = await axios.post(`${API_URL}/users`, {
				email: email,
				password: password,
				name: name,
			});
		} catch (error) {
			return fail(400, { message: 'message' });
		}
		throw redirect(302, '/');
	},
} satisfies Actions;
