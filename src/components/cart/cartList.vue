<template>
	<div>
		<div class="border-b pb-4 flex justify-between items-center">
			<button type="button" class="text-gray-400 hover:text-gray-900" @click="onEdit()">Select Item Remove</button>
			<input type="checkbox" class="ml-2 w-4 h-4 accent-zinc-700" v-model="selectedAll" @change="onSelectAll()"/> 
		</div>
		<li class="flex py-6" v-for="lesson in lessonList" :key="lesson.id">
			<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img :src="lesson.picture" class="h-full w-full object-cover object-center">
			</div>
			<div class="ml-4 flex flex-1 flex-col">
				<div>
					<div class="flex justify-between font-medium text-gray-900">
						<h3>
							{{ lesson.title }}
						</h3>
						<div class="ml-4 flex items-center">
							<p>${{ lesson.price }}</p>
							<input type="checkbox" class="ml-2 w-4 h-4 accent-zinc-700" v-model="selectedGroup" :value="lesson.id"/> 
						</div>
					</div>
				</div>
				<div class="flex items-end justify-end mt-auto">
					<button type="button" class="text-gray-400 hover:text-gray-900" @click="onRemove(lesson.id)">Remove</button>
				</div>
			</div>
		</li>
	</div>
</template>
<script lang="ts">
import { defineComponent,PropType,ref,onMounted } from 'vue';
import { List } from '@/store/cart/type'

export default defineComponent({
	props:{
		list:{
			type: Array as PropType<List[]>,
			default: () => [],
		},
	},
	setup(props){
		const lessonList = ref<List[]>([])
		const selectedGroup = ref<number[]>([])
		const selectedAll = ref(false)

		const onSelectAll = ()=>{
			if(selectedAll.value){
				return selectedGroup.value = lessonList.value.map(lesson=>lesson.id)
			}else{
				return selectedGroup.value = []
			}
		}
		const onRemove =(id:number)=>{
			lessonList.value.splice(lessonList.value.map(lesson=>lesson.id).indexOf(id),1)
		}
		const onEdit = ()=>{
			if(selectedGroup.value.length===0){
				alert('No selected items. Please check first.')
				return
			}
			selectedGroup.value.forEach((id)=>{
				lessonList.value.splice(lessonList.value.map(lesson=>lesson.id).indexOf(id),1)
			})
		}

		onMounted(() => {
			lessonList.value = props.list
		})

		return{
			lessonList,
			selectedGroup,
			selectedAll,
			onSelectAll,
			onRemove,
			onEdit
		}
	}
});
</script>