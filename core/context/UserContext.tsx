import { createContext, useState } from "react";
import { IUser, IUserContext } from "../interfaces/IUser";

export const contextUser = createContext<IUserContext | null | IUser>(null);

export function UserContext({ children }: any) {
	const [user, setUser] = useState<IUser | null>(null);

	return <contextUser.Provider
		value={{ user, setUser }}>
		{children}
	</contextUser.Provider>;
}
