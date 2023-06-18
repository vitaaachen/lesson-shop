import { ref } from 'vue';
import { List } from '@/store/cart/type'

const cartGroup = ref<List[]>([])
const addCart = (lesson:List) => {
	checkLesson(lesson)
	cartGroup.value = [...cartGroup.value,lesson]
}

// 	排除重複加入相同課程
const checkLesson = (lesson:List)=>{
	lesson.isCart = true
}

export default {
	addCart,
	cartGroup,
}