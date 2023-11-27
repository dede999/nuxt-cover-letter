import findUserData from "~/util/findUserData";

export const useUserData = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    attemptCount: 0,
    lastAttemptedText: '',
  }),
  getters: {
    isLogged(state) {
      return state.email;
    },
  },
  actions: {
    logIn: async (token: string)=> {
      const { name, email } = await findUserData(token);
      this.name = name;
      this.email = email;
    },
    logout: () => {
      this.name = '';
      this.email = '';
    },
  },
})
