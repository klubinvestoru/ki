<template>
  <nav class="flex flex-col justify-center items-center">
    <nav class="px-8 pt-2 -mb-px flex justify-center  max-w-xs">
      <button
        class="text-teal-dark border-b-2 uppercase tracking-wide font-bold text-sm py-3 mx-8"
        @click="selected = 'Praha'"
        :class="selected === 'Praha' ? 'border-green-300' : 'border-transparent'"
      >
        Praha
      </button>
      <button
        class=" text-grey-dark border-b-2 uppercase tracking-wide font-bold text-sm py-3 mx-8"
        @click="selected = 'Brno'"
        :class="selected === 'Brno' ? 'border-green-300' : 'border-transparent'"
      >
        Brno
      </button>
      <button
        class="text-grey-dark border-b-2 uppercase tracking-wide font-bold text-sm py-3 mx-8"
        @click="selected = 'Blava'"
        :class="selected === 'Blava' ? 'border-green-300' : 'border-transparent'"
      >
        Bratislava
      </button>
    </nav>

    <div id="myTabPanels">
      <div
        v-if="selected === 'Praha'"
        class="px-8"
      >
        <div class="flex flex-wrap -mx-16">
          <v-person />
          <v-person
            photo="nabor/honz"
            alt="Místopředseda Jan Záhumenský"
          >
            <template v-slot:name>Honza</template>
            <template v-slot:post>Místopředseda</template>
            <template v-slot:quote>Na minutovým grafu se ti zdá všechno jak free fall tvl.</template>
          </v-person>
          <v-person
            photo="nabor/martina"
            alt="Martina – Event coordinator"
          >
            <template v-slot:name>Martina</template>
            <template v-slot:post>Event coordinator</template>
            <template v-slot:quote>Kluci, nemáte někdo známého na policii? Potřebovala bych se na něco
              zeptat.</template>
          </v-person>
          <v-person />
        </div>
      </div>
      <div
        v-if="selected === 'Brno'"
        class="px-8"
      >
        <div class="flex flex-wrap -mx-16">
          <v-person
            photo="nabor/patrik"
            alt="Předseda Klubu investorů Brno Patrik Stránký"
          >
            <template v-slot:name>Patrik</template>
            <template v-slot:post>Předseda, Brno</template>
            <template v-slot:quote>A búchanou poznáš?</template>
          </v-person>
          <v-person
            photo="nabor/patrik"
            alt="Předseda Klubu investorů Brno Patrik Stránký"
          >
            <template v-slot:name>Dáda</template>
            <template v-slot:post>Předseda, Brno</template>
            <template v-slot:quote>A búchanou poznáš?</template>
          </v-person>
          <v-person
            photo="nabor/patrik"
            alt="Předseda Klubu investorů Brno Patrik Stránký"
          >
            <template v-slot:name>Franta</template>
            <template v-slot:post>Předseda, Brno</template>
            <template v-slot:quote>A búchanou poznáš?</template>
          </v-person>
          <v-person
            photo="nabor/patrik"
            alt="Předseda Klubu investorů Brno Patrik Stránký"
          >
            <template v-slot:name>Nicol</template>
            <template v-slot:post>Předseda, Brno</template>
            <template v-slot:quote>A búchanou poznáš?</template>
          </v-person>
        </div>
      </div>
      <div
        v-if="selected === 'Blava'"
        class="px-8"
      >
        <div class="flex flex-wrap -mx-16">
          <v-person
            photo="nabor/michal"
            alt="Předseda Klubu investorů Bratislava Michal Farakaš"
          >
            <template v-slot:name>Michal</template>
            <template v-slot:post>Předseda, Bratislava</template>
          </v-person>
          <v-person
            photo="nabor/michal"
            alt="Předseda Klubu investorů Bratislava Michal Farakaš"
          >
            <template v-slot:name>Tvoje máma</template>
            <template v-slot:post>Předseda, Bratislava</template>
          </v-person>
          <v-person
            photo="nabor/michal"
            alt="Předseda Klubu investorů Bratislava Michal Farakaš"
          >
            <template v-slot:name>Tvoje máma</template>
            <template v-slot:post>Předseda, Bratislava</template>
          </v-person>
          <v-person
            photo="nabor/michal"
            alt="Předseda Klubu investorů Bratislava Michal Farakaš"
          >
            <template v-slot:name>Tvoje máma</template>
            <template v-slot:post>Předseda, Bratislava</template>
          </v-person>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import VButton from "@/components/atoms/Button";
import VPerson from "@/components/molecules/Person";

export default {
  components: { VButton, VPerson },
  data() {
    return {
      selected: "Praha"
    };
  }
};
</script>
