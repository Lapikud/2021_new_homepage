<template>
    <div class="l-container">
        <div class="c-section">
            <v-masonry class="c-masonry" :items="projects" :ssr-columns="1" :column-width="400" :padding="20">
                <template #default="{ item }">
                <a :href="item.url"
                      target="_blank">
                    <div class="c-masonry__item">
                        <img class="c-masonry__img" :src="require('@/assets/images/projects/' + item.photo)" />
                        <div class="c-masonry__overlay">
                            <h4 class="u-h4">{{ item.title }}</h4>
                            <p class="c-masonry__description">{{ item.description }}</p>
                        </div>
                    </div>
                </a>
                </template>
            </v-masonry>
        </div>
    </div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" src="./Projects.scss" scoped></style>
