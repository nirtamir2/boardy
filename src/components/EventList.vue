<template>
  <!--<v-flex md12 lg4 lg-offset8>-->
    <!--<v-time-picker v-model="e7" format="24hr"></v-time-picker>-->
    <!--<p>{{e7}}</p>-->
  <!--</v-flex>-->
  <v-layout row>
    <v-flex xs7>
      <div>
        <div class="headline">Supermodel</div>
        <div>Foster the People</div>
      </div>
    </v-flex>
    <v-flex xs5>
      <v-card-media
        src="https://randomuser.me/api/portraits/men/85.jpg"
        height="125px"
        contain
      ></v-card-media>
    </v-flex>
  </v-layout>

</template>

<script>
  export default{
    data(){
      return {
        e7: null,
        schedule: {
          "date": "2017-07-27 ",
          "events": [
            {
              "url": "http://127.0.0.1:8000/events/1/",
              "order": 1,
              "image_url": "http://weknowyourdreams.com/image.php?pic=/images/breakfast/breakfast-08.jpg",
              "text": "ארוחת בוקר",
              "deleted": false,
              "schedule": "http://127.0.0.1:8000/schedule/1/"
            }
          ]
        }
      };
    }
  }
</script>
