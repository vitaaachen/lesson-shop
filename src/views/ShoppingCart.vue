<template>
	<div class="my-6 w-full text-center font-medium text-gray-900" v-if="cartGroup.length===0">
		<span>Nothing at all</span>
		<router-link to="/" class="font-medium text-gray-500 hover:text-gray-900 px-2 py-2">Lets Add Somethings <span aria-hidden="true"> &rarr;</span> </router-link>
	</div>
	<div v-else> 
		<ul role="list" class="my-6 divide-y divide-gray-200" >
			<CartList :list="cartGroup"/>
		</ul>
		<div class="border-t border-gray-200 py-4 mt-6">
			<div class="flex justify-between text-base font-medium text-gray-900">
				<p>Total</p>
				<p>${{ sumAmount }}</p>
			</div>
			<p class="mt-0.5 text-sm text-gray-500">Check you cart and submit :)</p>
			<div class="mt-6">
				<button class="w-full rounded bg-gray-200 p-2 mt-2 text-sm text-center hover:bg-gray-700 hover:text-white">Submit</button>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent,ref,computed } from 'vue';
import UseAddCart from '@/store/cart/use-add-cart'
import CartList from '@/components/cart/cartList.vue'

export default defineComponent({
	name: 'shoppingCart',
	components: {
		CartList
	},
	setup(){
		const checked = ref(false)
		const { cartGroup } = UseAddCart

		const sumAmount = computed(()=>{
			if(cartGroup.value.length === 0){
				return 0 
			}else{
				return cartGroup.value.reduce((acc,obj)=>acc + Number(obj.price),0)
			}
		})

		return{
			checked,
			cartGroup,
			sumAmount
		}
	}
});
</script>