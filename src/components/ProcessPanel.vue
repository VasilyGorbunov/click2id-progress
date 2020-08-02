<template>
  <div class="show-process">
    <h1 class="display-1">Процесс [{{pid}}]</h1>
    <div class="progress mt-3">
      <v-progress-linear
        height="18"
        rounded
        striped
        :color="color"
        :value="percent"
      ></v-progress-linear>
    </div>
    <v-card class="mt-3">
      <v-card-text>
        <p>Статус процесса: <span class="body">{{ proсess_status ? proсess_status.title : '' }}</span></p>
        <p class="text--secondary">{{ proсess_status ? proсess_status.description : '' }}</p>
        <p>Обработано операций {{ proc.done }} из {{ proc.total }} </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          v-if="proc.status > 1"
          color="primary"
          @click="$emit('onNewProcess')"
        >
          Новый процесс
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "ProcessPanel",
    props: {
      pid: {
        type: Number,
        required: true
      },
      proc: {
        type: Object,
        required: true
      }
    },
    computed: {
      color() {
        if (this.proc.status < 2) {
          return 'primary'
        } else if (this.proc.status === 2) {
          return 'success'
        } else {
          return 'error'
        }
      },
      percent() {
        return this.proc.done / this.proc.total * 100
      },
      proсess_status() {
        switch (this.proc.status) {
          case 0:
            return {
              title: "НОВЫЙ",
              description: "Обработка процесса не запущена"
            }
          case 1:
            return {
              title: "ОБРАБАТЫВАЕТСЯ",
              description: "Выполняется обработка процесса"
            }
          case 2:
            return {
              title: "ОБРАБОТАНО УСПЕШНО",
              description: "Процесс обработался без ошибок"
            }
          case 3:
            return {
              title: "ОБРАБОТАНО С ОШИБКАМИ",
              description: "Процесс обработался до конца, но с ошибками"
            }
          case 5:
            return {
              title: "ОШИБКА",
              description: "В процессе обработки процесса возникла критическая ошибка"
            }
          default:
            return {
              title: "НОВЫЙ",
              description: "Обработка процесса не запущена"
            }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .show-process {
    padding-top: 1rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
