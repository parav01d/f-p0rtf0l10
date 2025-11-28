export const generateActionCreators = <
  TStore extends { scanner: Record<string, Function> }
>(
  store: TStore
): {
  [K in keyof TStore["scanner"]]: TStore["scanner"][K] extends (
    state: any,
    payload: infer P
  ) => any
    ? (payload: P) => { type: K; payload: P }
    : () => { type: K; payload: undefined };
} => {
  const actionCreators: any = {};
  for (const actionType in store.scanner) {
    actionCreators[actionType] = (payload: any) => ({
      type: actionType,
      payload,
    });
  }
  return actionCreators;
};
