import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  movies: [],
  series: [],
  API_KEY: "512a0f19f22b84649ffb6aee5919165b",
});
