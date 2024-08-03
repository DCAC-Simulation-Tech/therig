<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        <div class="bg-[#08090a] bg-opacity-90 p-8 rounded shadow-lg w-full max-w-md">
            <h2
                class="text-xl pb-4 my-6 border-black-light border-b-2 text-center font-semibold uppercase text-rig antialiased">
                Join the
                Waitlist</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="name" class="block mb-2 text-xs font-semibold uppercase text-black-light">Name</label>
                    <input v-model="formData.name" id="name" type="text"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-xs font-semibold uppercase text-black-light">Email</label>
                    <input v-model="formData.email" id="email" type="email"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block mb-2 text-xs font-semibold uppercase text-black-light">Phone</label>
                    <input v-model="formData.phone" id="phone" type="tel"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded" required>
                </div>
                <div class="mb-4">
                    <label for="comments"
                        class="block mb-2 text-xs font-semibold uppercase text-black-light">Comments</label>
                    <textarea v-model="formData.comments" id="comments"
                        class="mt-1 p-2 block w-full border border-rig bg-transparent rounded"></textarea>
                </div>
                <div class="flex justify-end pt-4">
                    <button type="button" @click="$emit('close')"
                        class="text-sm px-6 py-3 mr-2 text-black-light font-bold uppercase antialiased">Cancel</button>
                    <button type="submit"
                        class="text-sm px-6 py-3 text-black bg-rig font-bold uppercase antialiased">Submit</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['close', 'submit'])

const formData = ref({
    name: '',
    email: '',
    phone: '',
    comments: ''
})

const submitForm = () => {
    emit('submit', { ...formData.value })
}
</script>