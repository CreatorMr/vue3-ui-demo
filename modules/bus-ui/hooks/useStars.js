import { ref } from 'vue'
export function useStars(num, cb) {
    const starNum = ref(num)
    const setStarNum = (num) => {
        starNum.value = num
        cb && cb(num)
    }
    return [starNum, setStarNum]
}
