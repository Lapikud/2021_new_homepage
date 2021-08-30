<template>
  <div class="l-container">
      <section class="c-section">
        <div class="c-about__intro">
            <h1 class="u-h1">Lapikutest</h1>
            <p>
                MTÜ Lapikud loodi 2002. aasta 23. veebruaril. Organisatsiooni lõi
                sõpruskond informaatikuid, kellele meeldis koos aega viita. Põhjus, miks
                üldse MTÜ tehti seisnes selles, et saada .ee domeen. Nimi “Lapikud”
                tuleneb sellest, et siis oli informaatikute erialatähiseks “LAP”.
                Organisatsioon tegutses aastatel 2002 kuni 2010 eesmärgiga sisustada IT
                tudengite vaba aega ning toetada IT õpinguid. Aastast 2011 tituleerisid
                Lapikud ennast Tarkvaraarenduse klubiks, ning organisatsiooni fookus on
                suunatud tudengite kaasamisse erinevatesse tarkvaraarenduse
                projektidesse. 2012. aasta kevadel kaitsti ära esimene Lapikutest
                koorunud lõputöö hindele 5.
            </p>
        </div>
        <div>
            <v-accordion title="Ajalugu">
            <div>
            <span>
                MTÜ Lapikud loodi 2002. aasta 23. veebruaril. Organisatsiooni lõi
                sõpruskond informaatikuid, kellele meeldis koos aega viita. Põhjus, miks
                üldse MTÜ tehti seisnes selles, et saada .ee domeen. Nimi “Lapikud”
                tuleneb sellest, et siis oli informaatikute erialatähiseks “LAP”.
                Organisatsioon tegutses aastatel 2002 kuni 2010 eesmärgiga sisustada IT
                tudengite vaba aega ning toetada IT õpinguid. Aastast 2011 tituleerisid
                Lapikud ennast Tarkvaraarenduse klubiks, ning organisatsiooni fookus on
                suunatud tudengite kaasamisse erinevatesse tarkvaraarenduse
                projektidesse. 2012. aasta kevadel kaitsti ära esimene Lapikutest
                koorunud lõputöö hindele 5.
            </span>
            </div>
        </v-accordion>
        <v-accordion title="Organisatsiooni juhtinud inimesed läbi aegade">
            <div v-for="(management, i) in pastmanagement" :key="i">
            <h4 class="u-h5 u-mb-1">Aasta {{ management.year }} juhatus</h4>
            <div class="c-management">
                <div class="c-management__row" v-for="(person, y) in management.members" :key="y">
                    <img
                    class="c-management__img"
                    :src="require(`@/assets/images/pastManagement/${person.image}`)"
                    />
                    <p class="u-mb-0">{{ person.name }}</p>
                </div>
            </div>
            </div>
        </v-accordion>
        <v-accordion
            v-for="(group, i) in members"
            :key="i"
            :title="group.title"
            :list="true"
        >
            <ul class="c-accordion__list">
            <li v-for="(member, y) in group.content" :key="y">{{ member }}</li>
            </ul>
        </v-accordion>
        <v-accordion title="Põhikiri"> <v-statutues /> </v-accordion>
        <!-- <v-accordion title="Põhikiri"> test </v-accordion> -->
        <!-- <v-accordion title="contents[0]"> Sisu </v-accordion>
        <v-accordion title="contents[0]"> Sisu </v-accordion>
        <v-accordion title="contents[0]"> Sisu </v-accordion>
        <v-accordion title="contents[0]"> Sisu </v-accordion> -->
        </div>
    </section>
  </div>
</template>
<script src="./AboutUs.js"></script>
<style lang="scss" src="./AboutUs.scss" scoped></style>
