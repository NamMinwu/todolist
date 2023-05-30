import { ArchiveBoxArrowDown } from 'svelte-hero-icons';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const title = data.get('title') as string;
		const content = data.get('content') as string;

		try {
			const response = await axios.post('http://54.180.121.245:3000/todos', {
				title: title,
				content: content,
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
