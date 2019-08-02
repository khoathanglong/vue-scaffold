<template>
  <v-app>
    <LeftDrawer :drawer="drawer.left" />

    <AppBar
      @ToggleLeftDrawer="drawer.left=!drawer.left"
    />

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <router-view />
      </v-container>
    </v-content>

    <RightDrawer :drawer="drawer.right" />

    <Footer />
  </v-app>
</template>

<script>
import LeftDrawer from '@/components/layouts/LeftDrawer';
import Footer from '@/components/layouts/Footer';
import AppBar from '@/components/layouts/AppBar';

export default {
  components: {
    LeftDrawer,
    Footer,
    AppBar,
  },
  name: 'App',
  data: () => ({
    drawer: {
      left: true,
    },
  }),
};

</script>
