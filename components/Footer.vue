<template>
  <footer class="has-background-light has-text-dark">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="~/assets/supphero_b.svg">
          </div>
          <div class="column">
            <ul>
              <li>
                <nuxt-link to="../info">Info</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../werbung">Werbung</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../datenschutz">Datenschutz</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../impressum">Impressum</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li>
                <nuxt-link to="../hilfe">Hilfe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../autoren">Autoren</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../artikel">Blog</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../jobs">Jobs</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer .column:first-child {
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
