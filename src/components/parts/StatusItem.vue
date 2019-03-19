<template>
  <v-card>
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <div class="layout row ma-0">
          <div
            class="sm6 xs6 flex text-sm-center py-3 white--text"
            :class="color"
          >
            <div class="headline">{{ title }}</div>
          </div>
          <div class="sm6 xs6 flex text-sm-center py-3">
            <div class="headline">{{ number }}</div>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    number: 0,
    color: String
  }
};
</script>
