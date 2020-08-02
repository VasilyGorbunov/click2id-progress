<template>
  <div class="start-process">
    <h1 class="display-2">Запуск процесса</h1>
    <v-text-field
      class="mt-5"
      label="Количество итераций"
      type="number"
      required
      outlined
      :rules="iterationRules"
      v-model="iter_count"
    >
    </v-text-field>
    <p>Предположительное время обработки (сек)</p>
    <p class="display-3">{{ iter_count * 2 }}</p>
    <v-btn
      color="primary"
      @click="startProcess"
    >
      Запуск
    </v-btn>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "StartPanel",
    data: () => ({
      iter_count: 10,
      iterationRules: [
        v => /^\d*\d$/.test(v) || 'Положительноe целое число',
      ],
    }),
    methods: {
      startProcess() {
        const start_data = {
          user_id: 1,
          input_data: {
            count: this.iter_count
          },
          process_name:"test"
        }
        this.$emit('onStartProcess', start_data)
      }
    }
  }
</script>

<style scoped lang="scss">
  .start-process {
    display: flex;
    min-width: 400px;
    flex-direction: column;
    align-items: center;
  }
</style>
