<script lang="ts" setup>
import { action$, actions } from "~/Store/Store";
import { store$ } from "~/Zramework/Store/Store";

function handleOnClick() {
  console.log("Button clicked!");
  action$.next(
    actions.authentication.LOGIN_REQUEST({
      email: "test@example.com",
      password: "password",
    })
  );
}

store$.subscribe((state) => {
  console.log(state);
});
console.log("Store initialized:", store$);
</script>

<template>
  <button @click="handleOnClick">Greet</button>
</template>
