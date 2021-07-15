<template>
    <header class="c-header u-flex">
        <div class="c-header__inner l-container">
            <router-link :to="{ path: `/` }">
                <img class="c-header__logo" src='@/assets/images/logo.svg'/>
            </router-link>
        </div>
    </header>
</template>
<script src="./Header.js" />
<style lang="scss" src="./Header.scss" scoped />
