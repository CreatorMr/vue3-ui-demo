export default [
    {
        id: 1,
        title: '菜单一'
    },
    {
        id: 2,
        title: '菜单二'
    },
    {
        id: 3,
        title: '菜单三',
        children: [
            { id: 31, title: '菜单三-1' },
            {
                id: 32,
                title: '菜单三-2',
                children: [
                    {
                        d: 321,
                        title: '菜单3-2-1'
                    },
                    {
                        d: 322,
                        title: '菜单3-2-2',
                        children: [
                            {
                                id: 3221,
                                title: '菜单3-2-2-1'
                            },
                            {
                                id: 3222,
                                title: '菜单3-2-2-2'
                            },
                            {
                                id: 3223,
                                title: '菜单3-2-2-3',
                                children: [
                                    {
                                        id: 32231,
                                        title: '菜单3-2-2-3-1'
                                    },
                                    {
                                        id: 32232,
                                        title: '菜单3-2-2-3-2'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        d: 323,
                        title: '菜单3-2-3'
                    }
                ]
            },
            { id: 33, title: '菜单三-3' }
        ]
    },
    {
        id: 4,
        title: '菜单四'
    },
    {
        id: 5,
        title: '菜单五'
    },
    {
        id: 6,
        title: '菜单六'
    }
]
