export const fetch$ = async (
  url: string,
  init?: RequestInit,
): Promise<string> => {
  return window.ipcRenderer.fetch(url, init);
};
