<template>
  <section class="c-section l-container">
    <div class="c-section__row">
      <h1 class="u-h1">Ajalugu</h1>
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
    <div class="c-section__row">
      <v-accordion title="Organisatsiooni juhtinud inimesed läbi aegade">
        <div v-for="(management, i) in pastmanagement" :key="i">
          <h2>Aasta {{ management.year }} juhatus</h2>
          <div v-for="(person, y) in management.members" :key="y">
            <img
              :src="require(`@/assets/images/pastManagement/${person.image}`)"
            />
            {{ person.name }}
          </div>
        </div>
      </v-accordion>
      <v-accordion
        v-for="(group, i) in members"
        :key="i"
        :title="group.title"
        :list="true"
      >
        <ol>
          <li v-for="(member, y) in group.content" :key="y">{{ member }}</li>
        </ol>
      </v-accordion>
      <v-accordion title="Põhikiri"> <v-statutues /> </v-accordion>
      <!-- <v-accordion title="Põhikiri"> test </v-accordion> -->
      <!-- <v-accordion title="contents[0]"> Sisu </v-accordion>
    <v-accordion title="contents[0]"> Sisu </v-accordion>
    <v-accordion title="contents[0]"> Sisu </v-accordion>
    <v-accordion title="contents[0]"> Sisu </v-accordion> -->
    </div>
  </section>
</template>
<script src="./AboutUs.js"></script>
