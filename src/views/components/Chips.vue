<template>
  <div class="space-y-5 text-center">
    <div>
      <a href="https://vuetifyjs.com/en/components/chips/">官方文档</a>
    </div>
    <p>
      Chips有以下几种变体：可关闭的（closeable）、过滤器（filter）、轮廓（outlined）、药丸形状（pill）。v-chip的默认插槽还可以接受文本之外的头像和图标。
    </p>
    <div>
      <v-chip closable prepend-icon="$vuetify" append-icon="$vuetify"> Chip </v-chip>
    </div>

    <div>
      <v-chip class="ma-2"> Default </v-chip>

      <v-chip class="ma-2" color="primary"> Primary </v-chip>

      <v-chip class="ma-2" color="secondary"> Secondary </v-chip>

      <v-chip class="ma-2" color="red" text-color="white"> Red Chip </v-chip>

      <v-chip class="ma-2" color="green" text-color="white"> Green Chip </v-chip>
    </div>
    <div>
      <v-chip class="ma-2" label> Label </v-chip>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        Tags
      </v-chip>

      <v-chip class="ma-2" color="primary" label>
        <v-icon start icon="mdi-account-circle-outline"></v-icon>
        John Leider
      </v-chip>

      <v-chip class="ma-2" closable color="cyan" label>
        <v-icon start icon="mdi-twitter"></v-icon>
        New Tweets
      </v-chip>
    </div>
    <div>
      <v-card class="mx-auto" max-width="450">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" cover :aspect-ratio="16 / 9">
        </v-img>
        <v-card-title class="flex-column align-start">
          <div class="text-h4 mb-2">Welcome Home...</div>
          <div class="text-h6 font-weight-regular text-grey">Monday, 12:30 PM, Mostly Sunny</div>
          <div class="d-flex align-center">
            <v-avatar size="24" class="me-4">
              <v-img
                src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                contain
              ></v-img>
            </v-avatar>

            <span class="text-body-2 text-grey">81° / 62°</span>
          </div>
        </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text class="d-flex justify-space-between">
          <v-chip prepend-icon="mdi-brightness-5"> Turn on lights </v-chip>
          <v-chip prepend-icon="mdi-alarm-check"> Set alarm </v-chip>
          <v-chip icon="mdi-blinds"> Close blinds </v-chip>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
