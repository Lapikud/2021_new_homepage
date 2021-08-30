<template>
    <header class="c-header u-flex">
        <div class="c-header__inner l-container">
            <router-link :to="{ path: `/` }">
                <img class="c-header__logo" src='@/assets/images/logo.svg'/>
            </router-link>
            <ul class="c-menu">
                <li class="c-menu__link-container u-flex s-only">
                    <router-link :to="{ path: `/` }">
                        <img class="c-header__logo" src='@/assets/images/logo-orange.svg'/>
                    </router-link>
                </li>
                <li
                    class="c-menu__link-container u-flex"
                    v-for="tab in tabLinks"
                    :key="tab" >
                        <router-link class="c-menu__link" :to="tab.route">
                        {{tab.tab}}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script src="./Header.js" />
<style lang="scss" src="./Header.scss" scoped />
