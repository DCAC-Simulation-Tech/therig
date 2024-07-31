<template>
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg relative w-96">
        <button @click="$emit('close')" class="absolute top-2 right-2 text-black">&times;</button>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input v-model="form.name" type="text" placeholder="Name" class="w-full p-2 border border-gray-300 rounded" required>
          <input v-model="form.email" type="email" placeholder="Email" class="w-full p-2 border border-gray-300 rounded" required>
          <input v-model="form.phone" type="tel" placeholder="Phone" class="w-full p-2 border border-gray-300 rounded" required>
          <textarea v-model="form.comments" placeholder="Comments" class="w-full p-2 border border-gray-300 rounded" required></textarea>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    comments: ''
  })
  
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
      })
      if (!response.ok) throw new Error('Error submitting form')
      alert('Form submitted successfully!')
      $emit('close')
    } catch (error) {
      alert('Error submitting form')
    }
  }
  </script>
  