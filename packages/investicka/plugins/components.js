import Vue from 'vue'

import Page from '~/components/Page.vue'

import VMenuItem from '@/components/atoms/MenuItem.vue'
import VSectionDayEvent from '@/components/atoms/SectionDayEvent.vue'
import VSectionGridItem from '@/components/atoms/SectionGridItem.vue'
import VSectionPartnersPartner from '@/components/atoms/SectionPartnersPartner.vue'

import VHeaderMenu from '@/components/molecules/HeaderMenu.vue'
import VHeroTimer from '@/components/molecules/HeroTimer.vue'
import VSectionColumns from '@/components/molecules/SectionColumns.vue'
import VSectionDay from '@/components/molecules/SectionDay.vue'
import VSectionGrid from '@/components/molecules/SectionGrid.vue'
import VSectionMap from '@/components/molecules/SectionMap.vue'
import VSectionPartners from '@/components/molecules/SectionPartners.vue'

import VFooter from '@/components/organisms/Footer.vue'
import VHeader from '@/components/organisms/Header.vue'
import VHero from '@/components/organisms/Hero.vue'
import VSection from '@/components/organisms/Section.vue'

Vue.component('blok-page', Page)

Vue.component('blok-header-menu-event', VMenuItem)
Vue.component('blok-section-day-event', VSectionDayEvent)
Vue.component('blok-section-grid-item', VSectionGridItem)
Vue.component('blok-section-partners-partner', VSectionPartnersPartner)

Vue.component('blok-header-menu', VHeaderMenu)
Vue.component('blok-hero-timer', VHeroTimer)
Vue.component('blok-section-columns', VSectionColumns)
Vue.component('blok-section-day', VSectionDay)
Vue.component('blok-section-grid', VSectionGrid)
Vue.component('blok-section-map', VSectionMap)
Vue.component('blok-section-partners', VSectionPartners)

Vue.component('blok-footer', VFooter)
Vue.component('blok-header', VHeader)
Vue.component('blok-hero', VHero)
Vue.component('blok-section', VSection)
