<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Click2ID</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="wrap">
          <start-panel v-if="show_start_panel" @onStartProcess="onStartProcess($event)"/>
          <process-panel :pid="pid" :proc="proc" @onNewProcess="newProcess"v-else/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  import axios from 'axios'
  import StartPanel from "./components/StartPanel";
  import ProcessPanel from "./components/ProcessPanel";

  export default {
    name: 'App',
    components: {ProcessPanel, StartPanel},
    data: () => ({
      show_start_panel: true,
      pid: 0,
      proc: {}
    }),
    methods: {
      newProcess() {
        this.proc = {}
        this.show_start_panel = true
      },
      async onStartProcess(start_data) {
        const start = (await axios.post('http://test.click2id.ru/api/process-indicator/create-task', start_data)).data
        if (start.status !== 0) return
        this.show_start_panel = false
        this.pid = start.process_id

        const reqInterval = setInterval(async () => {
          const intermediate_resp = (await axios.get(`http://test.click2id.ru/api/process-indicator/get-status/${this.pid}`)).data

          this.proc = {
            status: intermediate_resp.status,
            done: intermediate_resp.process_done,
            total: intermediate_resp.process_total
          }
          if (this.proc.status > 1) {
            clearInterval(reqInterval);
          }
        }, 1000)
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
