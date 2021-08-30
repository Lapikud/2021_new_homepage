<template>
  <section class="c-section">
    <div class="l-container">
      <v-infocard :image="require('@/assets/images/join/image_1.jpg')">
        <h1 class="u-h1">Mida me teeme?</h1>
        <p>
            Lapikute põhieesmärk on ühendada IT tudengeid, et üheskoos tegeleda
            tarkvaraprojektidega ja anda tudengile kooli kõrvalt lisakogemust.
            Selleks on meil tarkvara tiim, mis tegeleb organisatsiooni siseste ja
            väliste projektidega. Riistvara poolt on olemas Helpdesk, mis pakub
            tudengitele arvutiremonditeenust.
        </p>
        <p>
            Peale selle korraldame ühiseid üritusi ja koosviibimisi ning veedame
            koos toredalt aega.
        </p>
      </v-infocard>
    </div>
  </section>
  <section class="c-section c-section--white">
    <div class="l-container">
      <v-infocard>
        <h1 class="u-h1">Soovid meiega liituda?</h1>
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
        <v-button variation="primary" text="Liitu meiega!" href="/liituforms" />
      </v-infocard>
    </div>
  </section>
  <section class="c-section">
    <div class="l-container">
        <div class="u-mb-2">
            <h1 class="u-h1">Mentorid</h1>
            <p>
                Kui leiad kellegi, kellega huvid kattuvad, võta temaga julgelt ühendust!
            </p>
        </div>
      <v-infocard
        v-for="(mentor, i) in mentors"
        :key="i"
        mentorCard
        :image="require(`@/assets/images/mentors/${mentor.photo}`)"
      >
      <div class="u-mb-1">
        <h3 class="u-h3">{{ mentor.name }} ({{ mentor.age }})</h3>

        <span><b>Eriala: </b>{{ mentor.specialty }}</span><br>
        <span><b>Kursus: </b>{{ mentor.term }}</span><br>
        <span v-html="getTeams(mentor.teams)"></span>
    </div>
        <div class="u-mb-1">
            <h4 class="u-h4">Milliseid inimesi ootan oma piksliteks?</h4>
            <span v-html="stringify(mentor.description)" />
        </div>
        <div class="u-mb-1">
             <h4 class="u-h4">Milline Lapik olen ise?</h4>
            <span v-html="stringify(mentor.activities)" />
        </div>
        <div>
            <h4 class="u-h4">Kontaktid</h4>
            <span v-html="getContact(mentor.contactMethods)" />
        </div>
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
