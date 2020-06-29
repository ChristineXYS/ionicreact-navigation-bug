# ionicreact-navigation-bug

1. npm install
2. ionic serve
3. do push and go back, pay attention to the direction

In tab1.tsx and tab2.tsx, the key code is

    const onNavigate = () => {

        //push with state, and the direction is wrong when go back
        //the same issue happen for query string too
        history.push("/tab2", {value: 1});

        //push without state, and the direction is right when go back
        // history.push("/tab2");
    };