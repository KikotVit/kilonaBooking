
import React, { createContext, useContext, useState } from 'react';
import { IRoutes, store } from '../store/mock.store';

interface IRouteContext {
    route: IRoutes;
    setCurrentRoute: (route: IRoutes) => void;
}

export const RouteContext = createContext({} as IRouteContext);

export const RouteProvider = ({ children }) => {
    const [route, setRoute] = useState<IRoutes>(store[1]);

    const setCurrentRoute = (route: IRoutes) => {
        setRoute(route);
    };

    return (
        <RouteContext.Provider value={{ route, setCurrentRoute }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRouteContext = (): IRouteContext => {

    const routeContext = useContext(RouteContext);

    return routeContext;
};