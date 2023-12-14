export const decomposeLink = (link: string) => {
	const linkParts = link.split('/');
	const UserId = linkParts[linkParts.length - 2];
	const activationToken = linkParts[linkParts.length - 1];

	return {
		userId: UserId,
		activationToken: activationToken,
	};
};
