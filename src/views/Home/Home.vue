<template>
    <div>
        <v-image-slider :images="importAll(require.context(`@/assets/images/slideshow/`, true, /\.jpg|gif|png|svg$/))"/>
        <section class="c-section c-section--white c-section--center">
            <div class="l-container">
                <div class="c-section__row">
                    <h1 class="u-h1">Kes me oleme?</h1>
                    <p>
                        MTÜ Lapikud on Tallinna Tehnikaülikooli Tarkvaraarendusklubi, mis ühendab endisi ja praegusi IT huvilisi tudengeid. Organisatsioon loodi 2002. aastal informaatika tudengite poolt, kelle erialatunnuseks oli “LAP”. Targad mehed otsustasid, et järelikult on nad “Lapikud”.
                    </p>
                </div>
                <div class="c-section__row">
                    <h1 class="u-h1">Millega tegeleme?</h1>
                    <p>
                        Meie põhieesmärgiks on Tallinna Tehnikaülikooli IT tudengite erialase lisandväärtuse loomine. Kaasame tudengeid huvitavatesse IT projektidesse ning anname tudengitele võimaluse midagi reaalset oma käega midagi ära teha. Meie projektidest kooruvad välja huvitavad ja tarvilikud lõputööd. Pakume nutikatele tudengitele võimalust saada meie juures esimene töökogemus. Lapikud ei ole ainult IT tudengite organisatsioon – püüame kaasata oma tegevusse ka majandusteaduskonna tudengeid, et projektides oleks esindatud ka äriline pool.
                    </p>
                </div>
            </div>
        </section>
        <section class="c-section">
            <div class="l-container">
                <v-icon-section />
            </div>
        </section>
        <section class="c-section c-section--white c-section--center">
            <div class="l-container">
                <h1 class="u-h1">Koostööpartnerid</h1>
                <v-partners />
            </div>
        </section>
        <div class="l-container">
            <!-- <v-button variation="primary" text="Click me" />
            <v-button variation="secondary" text="I'm a button too"/> -->
        </div>
    </div>
</template>
<script src="./Home.js"></script>
