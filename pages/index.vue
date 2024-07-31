<template>
    <div class="relative h-screen bg-black">
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
        <source src="#" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <p class="text-white uppercase"> <strong>welcome to</strong> </p>
        <img src="/assets/media/RIG 2.0-04.png" alt="VR Arcade Logo" class="w-1/4 mb-8">
        <button @click="showModal = true" class="btn bg-blue-500 text-white px-4 py-2 rounded">Join the Waitlist</button>
        <modal v-if="showModal" @close="showModal = false"/>
        <div class="comments mt-8 text-white">
          <h2 class="text-2xl mb-4">Latest Comments</h2>
          <ul>
            <li v-for="comment in comments" :key="comment._id">{{ comment.comments }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Modal from '~/components/Modal.vue'
  
  const showModal = ref(false)
  const comments = ref([])
  
  onMounted(async () => {
    try {
      const response = await fetch('/api/comments')
      const data = await response.json()
      comments.value = data
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  })
  </script>
  