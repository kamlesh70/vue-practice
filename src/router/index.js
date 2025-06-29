
import HomeView from "@/views/Home-view.vue";
import TodoCreateView from "@/views/TodoCreate-View.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/todo-create",
    component: TodoCreateView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;