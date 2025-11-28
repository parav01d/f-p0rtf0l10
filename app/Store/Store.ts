import { Subject } from "rxjs";
import type { IAction } from "~/Zramework/Store/Action";
import { generateActionCreators } from "~/Zramework/Store/ActionCreator";
import {
  AuthenticationStore,
  type AuthenticationState,
} from "./Authentication/AuthenticationStore";

export const InitialState = {
  authentication: AuthenticationStore.initialState as AuthenticationState,
};

export const Scanner = {
  authentication: AuthenticationStore.scanner,
};

export const actions = {
  authentication: generateActionCreators(AuthenticationStore),
};

export const action$ = new Subject<IAction>();
