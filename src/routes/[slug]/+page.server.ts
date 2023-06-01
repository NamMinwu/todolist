import { API_URL } from '$lib/constants/api';
import axios from 'axios';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const id = Number(params.slug);
	const response = await axios.get(`${API_URL}/page/${id}`);
	return response.data;
}) satisfies PageServerLoad;
