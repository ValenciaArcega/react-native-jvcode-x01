
import { useContext } from "react";
import { contextUser } from "../context/UserContext";
import { IUserContext } from "../interfaces/IUser";

export function useUser() {
	const context = useContext(contextUser);

	if (!context || !('user' in context)) {
		throw new Error('useUser must be used within a UserContext Provider');
	}

	return context as IUserContext;
}
