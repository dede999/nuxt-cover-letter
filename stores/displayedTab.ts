import {useStorage} from "@vueuse/core";

export const useDisplayedData = defineStore('tabs', () => {
  const displayedTab = useStorage('displayed-tab', 'instructions');

  function setDisplayedTab(tabName: string) {
    displayedTab.value = tabName;
  }

  return {
    displayedTab, setDisplayedTab,
  };
})
