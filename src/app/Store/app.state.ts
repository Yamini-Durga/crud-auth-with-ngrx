import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { SpinnerReducer } from "./spinner/spinner.reducer";
import { SPINNER_STATE_NAME } from "./spinner/spinner.selector";
import { SpinnerState } from "./spinner/spinner.state";

export interface AppState {
    [SPINNER_STATE_NAME]: SpinnerState,
    [AUTH_STATE_NAME]: AuthState,
    router: RouterReducerState
}

export const AppReducer = {
    [SPINNER_STATE_NAME]: SpinnerReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer
}