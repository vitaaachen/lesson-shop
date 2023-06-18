<template>
	<div class="z-10 overflow-hidden border-b flex justify-center fixed top-0 left-0 right-0 bg-white">
		<router-link to="/" :class="{ 'font-bold': nowPath==='lessonList' }" class="font-medium text-gray-500 hover:text-gray-900 px-2 py-2">Lesson</router-link>
		<router-link to="/cart" :class="{ 'font-bold':nowPath==='shoppingCart' }" class="font-medium text-gray-500 hover:text-gray-900 px-2 py-2">Cart</router-link>
	</div>
	<div class="container mx-auto px-4 pt-8">
		<router-view/>
	</div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	setup(){
		const route = useRoute();
		const nowPath =computed(()=>{
			return route.name
		})
		return{
			nowPath
		}
	}
});
</script>