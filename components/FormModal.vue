<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        <div class="bg-[#08090a] bg-opacity-90 p-8 rounded shadow-lg w-full max-w-md">
            <h2 class="text-xl pb-4 my-6 border-black-light border-b-2 text-center font-semibold uppercase text-rig antialiased">Join the
                Waitlist</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="name" class="block mb-2 text-xs font-medium uppercase">Name</label>
                    <input v-model="formData.name" id="name" type="text"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-xs font-medium uppercase">Email</label>
                    <input v-model="formData.email" id="email" type="email"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block mb-2 text-xs font-medium uppercase">Phone</label>
                    <input v-model="formData.phone" id="phone" type="tel"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="comments" class="block mb-2 text-xs font-medium uppercase">Comments</label>
                    <textarea v-model="formData.comments" id="comments"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded"></textarea>
                </div>
                <div class="flex justify-end">
                    <a type="button" @click="$emit('close')" class="px-6 py-3 mr-2 ">Cancel</a>
                    <button type="submit" class="px-6 py-3 bg-rig">Submit</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    phone: '',
    comments: ''
})

const submitForm = () => {
    $emit('submit', { ...formData.value })
}
</script>