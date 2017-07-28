<template dir="rtl">
  <v-app style="max-width: 400px; margin: auto;" standalone>
    <v-toolbar >
      <v-layout row wrap>
        <v-flex >
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-left="40"
            max-width="400px"
          >          <v-text-field
            slot="activator"
            :label="this.chosenDate" dir="rtl"
            v-model="e3"
            prepend-icon="event"
            readonly
          ></v-text-field>
            <v-date-picker v-model="chosenDate" scrollable actions >
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
          <v-flex xs12 v-for="item in getEventsByDay(chosenDate)">
            <v-card class="cyan darken-2 white--text">
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
                    <v-checkbox fab dark small primary v-model="check">
                    </v-checkbox>
                    <v-btn fab dark small primary>
                      <v-icon dark>remove</v-icon>
                    </v-btn></div>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
          </v-flex>
          <div>
            <v-btn fab dark small primary>
              <v-icon dark>add</v-icon>
            </v-btn></div>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>


<script>
  export default{
    methods:{
      getEventsByDay(date)
      {/*if (this.schedule.date===date)*/
        return this.schedule.events;
      },
        setScheduleByDate(){this.schedule=getEventsByDay(this.chosenDate);}
    },
    watch:{'chosenDate':'setScheduleByDate'},
    data(){
      return {
        e7: null,
        schedule: {
          "date": "2017-07-27 ",
          "events": [
            {
              "url": "http://127.0.0.1:8000/events/1/",
              "order": 1,
              "image_url": "https://randomuser.me/api/portraits/men/86.jpg",
              "text": "ארוחת בוקר",
              "deleted": false,
              "schedule": "http://127.0.0.1:8000/schedule/1/"
            },{
              "url": "http://127.0.0.1:8000/events/2/",
              "order": 2,
              "image_url": "https://randomuser.me/api/portraits/men/87.jpg",
              "text": "ארוחת צהריים",
              "deleted": false,
              "schedule": "http://127.0.0.1:8000/schedule/2/"
            }
          ]
        },
        chosenDate:new Date().toISOString().slice(0,10),
      };
    }
  }
</script>
