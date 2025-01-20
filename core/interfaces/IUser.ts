export interface IUser {
	// CELULAR: string;
	// CORREO: string;
	// FOTO_PERFIL: string;
	// F_NACIMIENTO: string;
	// ID_USUARIO: number;
	// NOMBRE: string;
	// PRIMER_AP: string;
	// SEGUNDO_AP: string;
	GUID: string;
	GUID_TEAM: string;
}

export interface IUserContext {
	user: IUser | null;
	setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
