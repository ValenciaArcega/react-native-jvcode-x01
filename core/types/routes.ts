import { RouteProp } from '@react-navigation/native';
/**
 * @author ValenciaArcega
 * Centralizes all screens in the general stack that do not 
 * require a specific user. In other words, these types can be 
 * used across the entire app regardless of user role, depending 
 * on the specific needs.
 */
type RouteParamsGeneral = {
	Test2: {
		idAuction: number;
	};
};

export type Test2Props = {
	route: RouteProp<RouteParamsGeneral, "Test2">;
};

import type { StaticScreenProps } from '@react-navigation/native';

export type LoginProps = StaticScreenProps<{
	guid: string;
}>;