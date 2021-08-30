<template>
    <section class="c-section c-helpdesk">
        <div class="l-container c-helpdesk__header u-flex">
            <div class="c-helpdesk__header--left">
                <img class="c-helpdesk__logo" alt="Helpdesk logo" src="@/assets/images/helpdesk-on-black.png" />
            </div>
            <div class="c-helpdesk__header--right">
                <h1 class="u-h1">Anname sinu arvutile <span class="u-h1 orange">uue elu</span>!</h1>
                <p class="u-mb-0">HELPDESK lahendab probleemid seoses arvuti ja muu elektroonikaga</p>
            </div>
        </div>
    </section>
    <section class="c-section c-section--white">
        <div class="l-container">
            <div class="c-helpdesk u-flex">
                <div class="c-helpdesk__column">
                    <h1 class="u-h1">Mis on HELPDESK?</h1>
                    <p>HELPDESK on MTÜ Lapikute poolt pakutav arvutiabiteenus. Teenus on suunatud tudengitele, õppejõududele ning kõikidele huvilistele ka väljaspool Tallinna Tehnikaülikooli. Meie meeskond koosneb kogenud ja nutikatest Tallinna Tehnikaülikooli IT-tudengitest.</p>
                    <h1 class="u-h1">Mis teenuseid osutame?</h1>
                    <ul class="c-services">
                        <li v-for="description in serviceDescriptions" :key="description">{{ description.description }}</li>
                    </ul>
                </div>
                <div class="c-helpdesk__column">
                    <h1 class="u-h1">Hinnakiri</h1>
                    <table class="c-pricing" cellspacing="30px" cellpadding="30px">
                        <thead>
                            <tr>
                                <td class="c-pricing__cell c-pricing__cell--head">Teenus</td>
                                <td class="c-pricing__cell c-pricing__cell--head">Kogus</td>
                                <td class="c-pricing__cell c-pricing__cell--head">Hind</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="service in services" :key="service">
                                <td class="c-pricing__cell">{{ service.name }}</td>
                                <td class="c-pricing__cell">{{ service.amount }}</td>
                                <td class="c-pricing__cell">{{ service.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Jupid tellitakse kliendi enda poolt või kokkuleppel tehnikuga.<br>
                    Vajadusel tuleme üliõpilasküla ja Tehnopoli piires kohale.<br>
                    Oma tudengisõbralike hindade ja personaalse lähenemisega pakume teenust, milles ei pea pettuma!</b>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="c-section">
        <div class="l-container">
            <div class="c-contact u-flex">
                <div class="c-contact__column">
                    <h1 class="u-h1">Kontakt</h1>
                    <ul>
                        <li><b>E-mail:</b> <a href="mailto:helpdesk@lapikud.ee">helpdesk@lapikud.ee</a></li>
                        <li><b>Telefon:</b> <a href="tel:+37258160799">+372 581 607 99</a></li>
                        <li><b>Facebook Messenger:</b> <a href="https://m.me/LapikudHelpdesk" target="_blank" rel="noreferrer noopener">m.me/LapikudHelpdesk</a></li>
                    </ul>
                </div>
                <div class="c-contact__column">
                    <h1 class="u-h1">Asukoht</h1>
                    <p>Akadeemia tee 5 ühiselamu <br>ruum 008A</p>
                </div>
            </div>
            <div class="c-contact">
                <div class="c-contact__column">
                    <h1 class="u-h1">Lahtiolekuajad</h1>
                    <h3 class="u-h3">E-R 14-19*</h3>
                    <p>* Tegu on ajaperioodiga, mil meid on kõige tõenäolisem tabada. Siiski ei saa garanteerida kohalolekut.</p>
                </div>
            </div>
        </div>
    </section>
  <v-map />
</template>
<script src="./Helpdesk.js"></script>
<style lang="scss" src="./Helpdesk.scss" scoped></style>
