---
layout: page
---

<div class="player-container">
  <w-player class="player"></w-player>
</div>

<script setup>
import WPlayer from  './components/WPlayer.vue';
</script>

<style>
.player-container {
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.player {
  width: 720px;
  height: 405px;
  position: relative;
}
</style>