export default {
    mounted(el) {
        console.log(el)
        const oSelectInput = el.querySelector('.select-input'),
            oSelectorMenu = el.querySelector('.selector-menu')

        const oInput = el.querySelector('input'),
            oPlaceHolder = el.querySelector('label'),
            oIcon = el.querySelector('span')

        oInput.addEventListener(
            'focus',
            function() {
                oPlaceHolder.style.display = 'none'
                oIcon.className = 'iconfont icon-search'
                setTimeout(() => {
                    oSelectorMenu.style.display = 'block'
                }, 200)
            },
            false
        )

        oInput.addEventListener(
            'blur',
            function() {
                oIcon.className = 'iconfont icon-arrow-down'
                setTimeout(() => {
                    oSelectorMenu.style.display = 'none'
                    if (this.value.length === 0) {
                        oPlaceHolder.style.display = 'block'
                    }
                }, 200)
            },
            false
        )
    }
}