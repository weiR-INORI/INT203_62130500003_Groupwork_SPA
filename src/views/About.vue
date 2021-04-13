<template>
  <div class="aboutp">
    <Profile class="pt-4"></Profile>
    <Line></Line>
    <Member class="pt-4"></Member>
    <Line class="pb-4"></Line>
  </div>
</template>

<script>
  import Profile from '@/components/Profile.vue'
  import Line from '@/components/Line.vue'
  import Member from '@/components/Member.vue'

export default {
  name: 'About',
  components: {
    Profile,
    Line,
    Member
  }
}
</script>
