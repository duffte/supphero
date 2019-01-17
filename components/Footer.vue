<template> 
  <footer class="has-background-light has-text-dark">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="~/assets/logo_b.svg" alt="Logo">
          </div>
          <div class="column">
            <ul>
              <li>
                <nuxt-link to="../info" title="Info">Info</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../werbung" title="Werbung">Werbung</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../datenschutz" title="Datenschutz">Datenschutz</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../impressum" title="Impressum">Impressum</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li>
                <nuxt-link to="../hilfe" title="Hilfe">Hilfe</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../autoren" title="Autoren">Autoren</nuxt-link>
              </li>
              <li>
                <nuxt-link to="../artikel" title="Blog">Blog</nuxt-link>
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
