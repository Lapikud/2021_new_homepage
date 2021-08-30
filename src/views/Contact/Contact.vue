<template>
    <section class="c-section">
        <div class="l-container">
            <h1 class="u-h1">Kontakt</h1>
            <div class="c-contact u-flex">
                <div class="c-contact__general">
                    <h3 class="u-h3">MTÜ Lapikud</h3>
                    <p><b>Aadress:</b> Akadeemia tee 5, 12616 Tallinn</p>
                    <p><b>E-post:</b> <a href="mailto:lapikud@lapikud.ee">lapikud@lapikud.ee</a></p>
                    <p><b>Telefon:</b> <a href="tel:+37258160799">+372 58 160 799</a></p>
                    <p><b>Reg. kood:</b> 801 67 145</p>
                    <p><b>Swedbank:</b> EE812200221019551756</p>
                </div>
                <div class="c-contact__helpdesk">
                    <h3 class="u-h3">HELPDESK</h3>
                    <p><b>E-mail:</b> <a href="mailto:helpdesk@lapikud.ee">helpdesk@lapikud.ee</a></p>
                    <p><b>Telefon:</b> <a href="tel:+37258160799">+372 58 160 799</a></p>
                    <p><b>Facebook:</b> <a href="https://www.facebook.com/lapikudhelpdesk/" target="_blank" rel="noopener noreferrer">Lapikud Helpdesk</a></p>
                    <img class="c-contact__logo" alt="Helpdesk" src="@/assets/images/helpdesk-on-black.png" />
                </div>
                <div class="c-contact__socials">
                    <div class="fb-page" data-href="https://www.facebook.com/Lapikud/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Lapikud/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Lapikud/">Lapikud</a></blockquote></div>
                </div>
            </div>
        </div>
    </section>
    <section class="c-section c-section--white">
        <div class="l-container">
            <h1 class="u-h1">Juhatus</h1>
            <div class="c-management u-flex u-justify-between">
                <div v-for="(manager, i) in management" :key="i" class="c-management__manager">
                    <img class="c-management__img" :src="require(`@/assets/images/management/${manager.photo}`)" />
                    <h4 class="u-h4">{{ manager.name }}</h4>
                    <p class="c-management__subtitle u-mb-0">{{ manager.role }}</p>
                    <p class="c-management__subtitle u-mb-0">{{ manager.subrole }}</p>
                    <p class="u-mb-0">
                      Email:
                      <a :href="`mailto(${manager.email})`">{{ manager.email }}</a>
                    </p>
                    <p class="u-mb-0">
                      Telefon:
                      <a :href="`tel:${manager.phone})`">{{ manager.phone }}</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./Contact.js"></script>
<style lang="scss" src="./Contact.scss" scoped></style>
