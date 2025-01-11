export interface IApiResponse {
	success: boolean;
	message: string;
	listElementsDex: ITeam[];
}

export interface ITeam {
	id: string;
	name: string;
	image: boolean | string;
}
