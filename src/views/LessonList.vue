<template>
	<div class="my-6 w-full text-center font-medium text-gray-900" v-if="lessonGroup.length===0">
		Loading
	</div>
	<div class="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
		<LessonCard :list="lessonGroup" :onClick="addCart"/>
	</div>
</template>
<script lang="ts">
import { defineComponent,onMounted,ref } from 'vue';
import axios from 'axios'
import UseAddCart from '@/store/cart/use-add-cart'
import LessonCard from '@/components/lesson/lessonCard.vue'

export default defineComponent({
	name: 'lessonList',
	components: {
		LessonCard
	},
	setup(){
		const lessonGroup = ref([])
		const getLesson = ()=>{
			axios
				.get('https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e')
				.then((response) => {
					lessonGroup.value = response.data
					checkIsCart()
				})
		}

		const { addCart,cartGroup } = UseAddCart
		const checkIsCart = ()=>{
			lessonGroup.value.forEach((now:{id:number,isCart:boolean})=>{
				cartGroup.value.forEach((cart:{id:number})=>{
					if(now.id === cart.id){
						now.isCart = true
					}
				})
			})	
		}

		onMounted(() => {
			getLesson()
		})

		return{
			lessonGroup,
			addCart,
		}
	}
});
</script>