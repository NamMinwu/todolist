import axios from 'axios';

export async function getUser(accessToken: string) {
	const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const user = response.data;
	return user;
}
