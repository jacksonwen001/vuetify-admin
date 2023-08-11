<template>
  <div class="space-y-4">
    <div>
      <v-btn>default active button</v-btn>
    </div>
    <div>
      <v-btn disabled>default disabled button</v-btn>
    </div>
    <div>
      <v-btn block> block button</v-btn>
    </div>
    <div>
      <v-btn append-icon="mdi-plus">button</v-btn>
    </div>
    <div>
      <v-btn prepend-icon="mdi-plus">icon button</v-btn>
    </div>
    <div>
      <v-btn>button</v-btn>
    </div>
    <div class="space-x-4">
      <v-btn color="primary">button</v-btn>
      <v-btn color="success">button</v-btn>
      <v-btn color="blue">button</v-btn>
      <v-btn color="red">button</v-btn>
      <v-btn color="pink">button</v-btn>
    </div>

    <div class="space-y-3">
      <div class="space-x-5 space-y-3">
        <h1>lighten</h1>
        <v-btn color="pink-lighten-5">pink-lighten-5</v-btn>
        <v-btn color="pink-lighten-4">pink-lighten-4</v-btn>
        <v-btn color="pink-lighten-3">pink-lighten-3</v-btn>
        <v-btn color="pink-lighten-2">pink-lighten-2</v-btn>
        <v-btn color="pink-lighten-1">pink-lighten-1</v-btn>
      </div>

      <div class="space-x-5 space-y-3">
        <h1>accent</h1>
        <v-btn color="pink-accent-1">pink-accent-1</v-btn>
        <v-btn color="pink-accent-2">pink-accent-2</v-btn>
        <v-btn color="pink-accent-3">pink-accent-3</v-btn>
        <v-btn color="pink-accent-4">pink-accent-4</v-btn>
      </div>

      <div class="space-x-5 space-y-3">
        <h1>darken</h1>
        <v-btn color="pink-darken-1">pink-darken-1</v-btn>
        <v-btn color="pink-darken-2">pink-darken-2</v-btn>
        <v-btn color="pink-darken-3">pink-darken-3</v-btn>
        <v-btn color="pink-darken-4">pink-darken-4</v-btn>
      </div>
    </div>
    <div class="space-x-3">
      <h1>ICON button</h1>
      <v-btn icon="mdi-home"></v-btn>
      <v-btn icon="mdi-pencil"></v-btn>
    </div>
  </div>
</template>
