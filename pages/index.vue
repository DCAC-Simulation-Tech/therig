<template>
    <div class="relative h-screen bg-black">
      <video autoplay muted loop class=" absolute inset-0 w-full h-full object-cover object-center">
        <source src="/assets/media/7547007-uhd_3840_2160_25fps.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <p class="text-white uppercase"> <strong class="text-xs antialiased" >welcome to</strong> </p>
        <img src="/assets/media/RIG 2.0-04.png" alt="VR Arcade Logo" class="w-1/4 mb-8">
        <button @click="showModal = true" class="btn bg-[#FF6800] text-white px-4 py-2 font-bold uppercase text-lg rounded">Join the Waitlist</button>
        <modal v-if="showModal" @close="showModal = false"/>
        <div class="comments mt-8 text-white">
          <h2 class="text-xs mb-4 uppercase font-bold antialiased">Latest Comments</h2>
          <ul>
            <li v-for="comment in comments" :key="comment._id">{{ comment.comments }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Modal from '~/components/Modal.vue'

const showModal = ref(false)
const comments = ref([])

onMounted(async () => {
  const { data } = await axios.get('/api/comments')
  comments.value = data
})
</script>
  