/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ROOT: string;
    VITE_PUBLIC: string;
  }
}

type IpcRenderer = import('electron').IpcRenderer;
type Api = {
  fetch(url: string, init?: RequestInit): Promise<string>;
};

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: IpcRenderer & Api;
}
