<template>
  <div class="relative min-h-screen bg-black">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover object-center">
      <source src="/assets/media/7547007-uhd_3840_2160_25fps.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 mt-20 flex flex-col items-center justify-center">
      <p class="text-white uppercase"> <strong class="text-xs antialiased">welcome to</strong> </p>
      <img src="/assets/media/RIG 2.0-04.png" alt="VR Arcade Logo" class="w-1/4 mb-8">
      <button @click="openModal" class="btn bg-transparent border-2 text-white border-rig px-6 py-4 font-bold uppercase text-sm ">Join the
        Waitlist</button>
        <h2 class="text-xs mt-8 mb-4 border-b-2 border-rig text-white text-center uppercase font-bold antialiased">Top Comments</h2>
      <div v-if="comments.length" class="w-full max-w-md mx-auto">
        <ul class="flex items-center text-center">
          <li v-for="comment in topComments" :key="comment.id" class="m-2 bg-black rounded-lg bg-opacity-50 p-4">
            <p class="text-white text-opacity-95 font-bold">"{{ comment.text }}"</p>
            <p class="text-xs font-semibold text-rig italic">-{{ comment.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <form-modal v-if="showModal" @close="closeModal" @submit="handleSubmit"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FormModal from '~/components/FormModal.vue'

const showModal = ref(false)
const comments = ref([
  { id: 1, text: 'Amazing experience!', name: 'Ajay' },
  { id: 2, text: 'Loved it!', name: 'John' },
  { id: 3, text: 'Can\'t wait to come back!', name: 'Lisa' }
])

const openModal = () => { showModal.value = true }
const closeModal = () => { showModal.value = false }

const handleSubmit = async (formData) => {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      const newComment = await response.json()
      comments.value.unshift(newComment)
      closeModal()
    } else {
      console.error('Error submitting form:', response.statusText)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

const topComments = computed(() => comments.value.slice(0, 3))
</script>