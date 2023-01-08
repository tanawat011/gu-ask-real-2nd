import type { MenuItem } from 'components/Sidebar'

import { expandItem } from './expandItem'

describe('expandItem', () => {
  test('should expand the item', () => {
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
            ],
          },
        ],
      },
    ]

    const { newMenuList } = expandItem(menuList, 'label 1')

    expect(newMenuList).toEqual([
      {
        title: 'title',
        children: [
          {
            label: 'label 1',
            icon: <div>icon1</div>,
            to: '/to1',
            expanded: true,
          },
          {
            label: 'label 2',
            icon: <div>icon2</div>,
            children: [
              {
                label: 'label 2.1',
                to: '/to2.1',
              },
            ],
          },
        ],
      },
    ])
  })
})
