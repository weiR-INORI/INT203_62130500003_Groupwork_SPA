<template>
  <div class="aboutp">
    <Profile class="pt-4"></Profile>
    <li-ne></li-ne>
    <Member class="pt-4"></Member>
    <li-ne class="pb-4"></li-ne>
  </div>
</template>

<script>
  import Profile from '@/components/Profile.vue'  
  import Member from '@/components/Member.vue'

export default {
  name: 'About',
  components: {
    Profile,    
    Member
  }
}
</script>
