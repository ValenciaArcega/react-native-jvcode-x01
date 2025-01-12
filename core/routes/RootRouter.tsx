import { useUser } from "../hooks/useUser";
import { RouterUser } from "./RouterUser";
import { RouterNoUser } from "./RouterNoUser";

export const RootRouter = function () {
	const { user } = useUser();

	if (user)
		return <RouterUser />;
	else
		return <RouterNoUser />;
};
