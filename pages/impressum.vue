<template>
  <div>
    <BaseHero
      title="Impressum"
      subtitle=""
    />
    <section class="section">
      <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                Julian Gorohovskij

Haydnstr.
2
30659 Hannover

Telefon: 01772350631
E-Mail: julsena123@gmail.com

Umsatzsteuer-ID:
Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:
DE276542818

Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV):
Julian Gorohovskij

Hinweis gemäß Online-Streitbeilegungs-Verordnung

Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann, ohne dass ein Gericht eingeschaltet werden muss. Für die Einrichtung der Plattform ist die Europäische Kommission zuständig. Die Europäische Online-Streitbeilegungs-Plattform ist hier zu finden: http://ec.europa.eu/odr. Unsere E-Mail lautet: julsena123@gmail.com

Wir weisen aber darauf hin, dass wir nicht bereit sind, uns am Streitbeilegungsverfahren im Rahmen der Europäischen Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie zur Kontaktaufnahme bitte unsere obige E-Mail und Telefonnummer.

Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG)

Wir sind nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
Disclaimer – rechtliche Hinweise

§ 1 Warnhinweis zu Inhalten
Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.

§ 2 Externe Links
Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.

§ 3 Urheber- und Leistungsschutzrechte
Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.

Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.

§ 4 Besondere Nutzungsbedingungen
Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.

Quelle: Impressum Generator von JuraForum.de
            </div> 
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        //facebook
        { hid: 'ogtitle', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: this.image },
        //twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@supphero' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        }
      ]
    }
  },
  name: 'Impressum',
  data() {
    return {
      title: 'Impressum',
      image: 'https://supphero.netlify.com/_nuxt/img/368164f.svg',
      description: 'Impressum von Supphero'
    }
  }
}
</script>

