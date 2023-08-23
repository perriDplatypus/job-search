<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ currentAction }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Umbrella Corp</h2>
  </section>
  <JobSearchForm />
</template>

<script>
import JobSearchForm from '@/components/JobSearchForm.vue'
import nextElementInList from '@/utils/nextElementInList'
export default {
  name: 'TheHeadline',
  components: {
    JobSearchForm
  },
  data() {
    return {
      interval: null,
      actions: ['Build', 'Create', 'Design', 'Code'],
      currentAction: 'Build'
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.currentAction.toLowerCase()]: true
      }
    }
  },
  mounted() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.currentAction = nextElementInList(this.actions, this.currentAction)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
