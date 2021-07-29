<template>
  <section class="c-section">
    <div class="l-container">
      <v-infocard :image="require('@/assets/images/join/image_1.jpg')">
        <h1>Mida me teeme?</h1>
        <span>
          Lapikute põhieesmärk on ühendada IT tudengeid, et üheskoos tegeleda
          tarkvaraprojektidega ja anda tudengile kooli kõrvalt lisakogemust.
          Selleks on meil tarkvara tiim, mis tegeleb organisatsiooni siseste ja
          väliste projektidega. Riistvara poolt on olemas Helpdesk, mis pakub
          tudengitele arvutiremonditeenust.
          <p>
            Peale selle korraldame ühiseid üritusi ja koosviibimisi ning veedame
            koos toredalt aega.
          </p>
        </span>
      </v-infocard>
    </div>
  </section>
  <section class="c-section c-section--white">
    <div class="l-container">
      <v-infocard>
        <h1>Mida saad sina teha?</h1>
        <span>
          Meiega liituda!
          <p>
            Kui tunned, et tahad panustada meie organisatsiooni, siis on selleks
            mitu valikut. Meil on neli meeskonda: tarkvara, Helpdesk, turundus
            ja üritused.
          </p>

          <p>
            Tarkvara tiimiga liitudes saad praktikat, mida koolis ei pakuta.
            Lisaks saad kogenud vanemliikme käe all õppida kõike tarkvara
            hoomavat, rääkimata meeskonnatöö oskustest ja ilusast märkest CVsse.
          </p>

          <p>
            Helpdeski meeskonnas on võimalik omal käel parandada ja
            komplekteerida arvuti riistvara ning teha palju muudki tehnikaga
            seonduvat.
          </p>

          <p>
            Ürituste ja turundustiim tegelevad vastavalt Lapikute siseürituste
            korraldamise ja nende turundamisega, lisaks ka mõne suurüritusega
            (näiteks
            <a href="https://laphack.eu/" target="_blank">LAPhack</a>
            ).
          </p>
        </span>
        <v-button variation="c-btn" text="Igav nupp" href="/liituforms" />
      </v-infocard>
    </div>
  </section>
  <section class="c-section">
    <div class="l-container">
      <h1>Mentorid</h1>
      <h2>
        Kui leiad kellegi, kellega huvid kattuvad, võta temage julgelt ühendust!
      </h2>
      <v-infocard
        v-for="(mentor, i) in mentors"
        :key="i"
        mentorCard
        :image="require(`@/assets/images/mentors/${mentor.photo}`)"
      >
        <h1>{{ mentor.name }} ({{ mentor.age }})</h1>

        <h2>Eriala: {{ mentor.specialty }}, Kursus: {{ mentor.term }}</h2>
        <span v-html="getTeams(mentor.teams)"></span>
        <span
          v-html="
            '<h4>Milliseid inimesi ootan oma piksliteks?</h4>' +
            stringify(mentor.description)
          "
        />

        <span
          v-html="
            '<h4>Milline Lapik olen ise?</h4>' + stringify(mentor.activities)
          "
        />
        <span
          v-html="'<h4>Kontaktid</h4>' + getContact(mentor.contactMethods)"
        />
      </v-infocard>
      <!-- <v-infocard>
        <h1>Mida me teeme?</h1>
        <span>
          Lapikute põhieesmärk on ühendada IT tudengeid, et üheskoos tegeleda
          tarkvaraprojektidega ja anda tudengile kooli kõrvalt lisakogemust.
          Selleks on meil tarkvara tiim, mis tegeleb organisatsiooni siseste ja
          väliste projektidega. Riistvara poolt on olemas Helpdesk, mis pakub
          tudengitele arvutiremonditeenust.
          <p>
            Peale selle korraldame ühiseid üritusi ja koosviibimisi ning veedame
            koos toredalt aega.
          </p>
        </span>
      </v-infocard> -->
    </div>
  </section>
</template>
<script src="./Join.js"></script>
