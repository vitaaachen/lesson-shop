<template>
	<div class="group relative" v-for="lesson in list" :key="lesson.id">
		<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
			<img :src="lesson.picture" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover sm:h-52">
		</div>
		<div class="mt-4 flex justify-between">
			<div>
				<h3 class="text-sm text-gray-700 lg:h-10">
					{{ lesson.title }} 
				</h3>
				<p class="mt-1 text-xs text-gray-500" :class="{'text-lime-600':lesson.status==='報名當中','text-red-600':lesson.status==='尚未開始'}">{{ lesson.status }}</p>
				<p class="mt-1 text-sm font-medium text-gray-900">${{ lesson.price }}</p>
			</div>
		</div>
		<!-- <可討論>可單個按鈕管理狀態 -->
		<button v-if="lesson.status==='尚未開始'" class="w-full rounded bg-gray-200 p-2 mt-2 text-sm text-center cursor-not-allowed opacity-50">To Be Continue</button>
		<button v-else-if="lesson.isCart===true" class="w-full rounded bg-gray-200 p-2 mt-2 text-sm text-center cursor-not-allowed opacity-50">Already Add</button>
		<button v-else @click="onClick(lesson)" class="w-full rounded bg-gray-200 p-2 mt-2 text-sm text-center hover:bg-gray-700 hover:text-white">Add Cart</button>
	</div>
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue';
import { List } from '@/store/cart/type'

export default defineComponent({
	props: {
		list:{
			type: Array as PropType<List[]>,
			default: () => [],
		},
		onClick: {
			type: Function,
			default: () => {null},
		},
	},
});
</script>