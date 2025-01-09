import { useUser } from "../hooks/useUser";
import { Router } from "./Router";
import { RouterNoUser } from "./RouterNoUser";

export const RootRouter = function () {
	const { user } = useUser();

	if (user)
		return <Router />;
	else
		return <RouterNoUser />;
};
