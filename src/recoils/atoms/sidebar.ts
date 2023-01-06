import { atom } from 'recoil'

export type SidebarState = {
  fullSidebar: boolean
}

export const sidebarAtom = atom<SidebarState>({
  key: 'sidebarAtom',
  default: {
    fullSidebar: true,
  },
})
