import { scan } from "rxjs";
import { action$, InitialState, Scanner } from "~/Store/Store";

export const store$ = action$.pipe(
  scan((state, action) => {
    console.log(action);
    for (const key in Scanner) {
      const scanner =
        Scanner[key as keyof typeof Scanner][
          action.type as keyof (typeof Scanner)[keyof typeof Scanner]
        ];
      if (scanner) {
        console.group(`${action.type}:`, scanner);
        console.groupEnd();
        return {
          ...state,
          [key as keyof typeof Scanner]: scanner(
            state[key as keyof typeof Scanner],
            action.payload
          ),
        };
      } else {
        console.log(`No scanner found for: ${action.type}`);
      }
    }
    return state;
  }, InitialState)
);
