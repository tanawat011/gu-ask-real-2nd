import type { MenuItem } from 'components/Sidebar'

import { selectChildItem } from './selectChildItem'

describe('selectChildItem', () => {
  test('should select the child item', () => {
    expect.hasAssertions()

    const menuList: MenuItem[] = [
      {
        title: 'title',
        children: [
          {
            label: 'label 1',
            icon: <div>icon1</div>,
            to: '/to1',
          },
          {
            label: 'label 2',
            icon: <div>icon2</div>,
            children: [
              {
                label: 'label 2.1',
                to: '/to2.1',
              },
              {
                label: 'label 2.2',
                to: '/to2.2',
              },
            ],
          },
          {
            label: 'label 3',
            icon: <div>icon3</div>,
            selected: false,
            children: [
              {
                label: 'label 3.1',
                to: '/to3.1',
                selected: false,
              },
            ],
          },
        ],
      },
    ]

    const parentItem = menuList[0].children[1]

    const result = selectChildItem(menuList, 'label 2.1', parentItem)

    expect(result).toEqual([
      {
        title: 'title',
        children: [
          {
            label: 'label 1',
            icon: <div>icon1</div>,
            to: '/to1',
            selected: false,
          },
          {
            label: 'label 2',
            icon: <div>icon2</div>,
            selected: false,
            children: [
              {
                label: 'label 2.1',
                to: '/to2.1',
                selected: true,
              },
              {
                label: 'label 2.2',
                to: '/to2.2',
                selected: false,
              },
            ],
          },
          {
            label: 'label 3',
            icon: <div>icon3</div>,
            selected: false,
            children: [
              {
                label: 'label 3.1',
                to: '/to3.1',
                selected: false,
              },
            ],
          },
        ],
      },
    ])
  })
})
