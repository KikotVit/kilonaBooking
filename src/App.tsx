import React from 'react';
import { BottomTabNavigator } from './navigation/tab.navigator';
import { RouteProvider } from './context/route.context';

function App(): React.JSX.Element {

    return (
        <RouteProvider>
            <BottomTabNavigator />
        </RouteProvider>
    );
}

export default App;
