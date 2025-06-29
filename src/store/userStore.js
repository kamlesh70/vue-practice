import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("userStore", () => {
  const user = ref(null);

  const setUser = async () => {
    const userDetails = {
      name: "Iron Man",
      age: 42,
      email: "iron.man@google.com",
      id: 1,
    };
    user.value = userDetails;
  }

  return {
    user, setUser
  }
});


export default useUserStore;