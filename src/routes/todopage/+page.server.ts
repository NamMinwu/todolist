import { API_URL } from '$lib/constants/api';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import type { TTodo } from '$lib/types/types';

export const load = (async () => {
	const response = await axios.get(`${API_URL}/todos`);
	return { todos: response.data as TTodo[] };
}) satisfies PageServerLoad;
