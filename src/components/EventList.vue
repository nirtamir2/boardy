<template dir="rtl">
  <v-app style="max-width: 400px; margin: auto;" standalone>
    <v-toolbar>
      <v-layout row wrap>
        <v-flex>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-left="40"
            max-width="400px"
          >
            <v-text-field
              slot="activator"
              :label="this.chosenDate" dir="rtl"
              v-model="e3"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="chosenDate" scrollable actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                  <v-btn flat primary @click.native="save()">Save</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <main>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 v-for="item in this.schedule">
            <transition name="fade">
              <v-card
                v-if="!item.deleted" class="cyan darken-2 white--text">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs7>
                      <div>
                        <div class="headline">{{item.text}}</div>
                      </div>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-media
                        :src="item.image_url"
                        height="125px"
                        contain
                      ></v-card-media>
                    </v-flex>
                    <div>
                      <v-checkbox fab dark small primary @click.native="item.deleted=true">
                      </v-checkbox>
                      <!--<v-btn fab dark small primary>-->
                      <!--<v-icon dark>remove</v-icon>-->
                      <!--</v-btn>-->
                    </div>
                  </v-layout>
                </v-container>
              </v-card>
            </transition>
          </v-flex>
          <v-flex xs12>
          </v-flex>
          <div>
            <v-btn fab dark small primary>
              <v-icon dark>add</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>


<script>
  export default{
    methods: {
      setScheduleByDate(){
        this.schedule = this.getEventsByDay(this.chosenDate);

      }
      ,
      getEventsByDay(date)
      {
        console.log('date is');
        console.log(date);
        this.$http.get('http://34.228.0.162:8000/myschedule/?date=' + date).then((data) => {
          console.log(data);
          this.schedule = data.body[0].events;
        })
      }
    },
    watch: {'chosenDate': 'setScheduleByDate'},
    data(){
      return {
        e7: null,
        chosenDate: new Date().toISOString().slice(0, 10),
        schedule: this.getEventsByDay(new Date().toISOString().slice(0, 10)),
      };
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
</style>
