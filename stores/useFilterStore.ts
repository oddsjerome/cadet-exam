// stores/useFilterStore.ts
import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", () => {
  const selectedGrindOptions = ref<string[]>([]);
  const selectedFlavorProfiles = ref<string[]>([]);

  const setGrindOptions = (options: string[]) => {
    selectedGrindOptions.value = options;
  };

  const setFlavorProfiles = (options: string[]) => {
    selectedFlavorProfiles.value = options;
  };

  const clearFilters = () => {
    selectedGrindOptions.value = [];
    selectedFlavorProfiles.value = [];
  };

  return {
    selectedGrindOptions,
    selectedFlavorProfiles,
    setGrindOptions,
    setFlavorProfiles,
    clearFilters,
  };
});
