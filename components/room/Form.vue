<script setup>
const openBook = defineModel('openBook')
const config = useRuntimeConfig()
const didItWork = ref(false)
const btnIsDisabled = ref(false)
const delayInSeconds = 3;
const {daysSelected, roomId} = defineProps({
  daysSelected: {
    type: Array,
    default: []
  },
  roomId: {
    type: Number, required: false, default: 0
  },
})
const tablesLayout = ['Pas de préférence', 'Tables en U', 'Conférence (uniquement chaises)', 'Tables en rangées']
const person = defineModel({
  default: {
    hours: null,
    info: 'arrive et matos',
    number_people: 8,
    table_layout: 'Pas de préférence',
    name: 'jf',
    society: 'afmlibre',
    vat: 'NA',
    email: 'jf@marche',
    phone: '084',
    street: 'bois'
  }
})
const {status, data, execute, error} =
    useFetch(`${config.public.API_URL}:3000/api/book`, {
      immediate: false,
      method: 'post',
      watch: false,
      body: {person: person, roomId: roomId, daysSelected: daysSelected},
    })

async function addBook() {
  didItWork.value = false
  await execute()
  if (!error.value) {
    didItWork.value = true
    btnIsDisabled.value = true
    setTimeout(() => {
      openBook.value = false
    }, delayInSeconds * 1000)
  }
}
</script>
<template>
  <form @submit.prevent="addBook">
    <div class="border-b border-gray-900/10 pb-12">
      <button type="button"
              class="flex ml-auto mr-4 font-semibold leading-6 text-gray-900 border border-esquare-yellow shadow-2xl p-1 rounded-md "
              @click="openBook=false">Annuler
      </button>
      <p class="mt-1 leading-6 text-gray-600">
        Si vous avez des besoins particuliers,<br/> n'hésitez pas à nous contacter au 0491/96.33.65.
      </p>
      <h2 class="mt-3 text-lg font-semibold leading-7 text-gray-900">Vos coordonnées</h2>
      <div class="mt-4 grid  grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div class="sm:col-span-full">
          <label for="name" class="required block font-medium leading-6 text-gray-900">Nom et prénom</label>
          <div class="mt-2">
            <input type="text" name="name" id="name" autocomplete="name" required
                   v-model="person.name"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-full">
          <label for="society" class="block font-medium leading-6 text-gray-900">Société</label>
          <div class="mt-2">
            <input type="text" name="society" id="society" autocomplete="society"
                   v-model="person.society"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>

        <div class="">
          <label for="email" class="required block font-medium leading-6 text-gray-900">Adresse mail</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="required"
                   v-model="person.email"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>

        <div class="">
          <label for="phone" class="required block font-medium leading-6 text-gray-900">Téléphone</label>
          <div class="mt-2">
            <input type="text" name="phone" id="phone" autocomplete="phone" required
                   v-model="person.phone"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="street" class="required block font-medium leading-6 text-gray-900">Adresse de facturation</label>
          <div class="mt-2">
            <input type="text" name="street" id="street" autocomplete="adresse" required
                   v-model="person.street"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-full">
          <label for="vat" class="block font-medium leading-6 text-gray-900">Numéro de TVA (si pas NA)</label>
          <div class="mt-2">
            <input type="text" name="vat" id="vat" autocomplete="tva" required
                   v-model="person.vat"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
          </div>
        </div>
      </div>

      <h2 class="mt-3 text-lg font-semibold leading-7 text-gray-900">Date(s) sélectionnée(s)</h2>
      <ul class="flex flex-row gap-2 items-center my-2">
        <li class="flex items-center p-3 rounded-md shadow-sm h-12 bg-esquare-green-light text-white"
            v-for="day in daysSelected" :key="day">{{ getDayInFrenchWithoutYear(day) }}
        </li>
      </ul>

      <div class="border-b border-gray-900/10 pb-12">
        <fieldset>
          <legend class="required text-lg font-semibold leading-6 text-gray-900">Horaire</legend>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <div class="flex items-center gap-x-3">
              <input id="push-everything" name="hours" type="radio" value="7-9"
                     v-model="person.hours"
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-everything"
                     class="block font-medium leading-6 text-gray-900">7h à 9h</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-email" name="hours" type="radio" value="9-13"
                     v-model="person.hours"
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-email" class="block font-medium leading-6 text-gray-900">9h à 13h</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-nothing" name="hours" type="radio" value="9-17"
                     v-model="person.hours"
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-nothing" class="block font-medium leading-6 text-gray-900">9h à 17h</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-nothing" name="hours" type="radio" value="13-17"
                     v-model="person.hours"
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-nothing" class="block font-medium leading-6 text-gray-900">13h à 17h</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-nothing" name="hours" type="radio" value="18-22"
                     v-model="person.hours"
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <label for="push-nothing" class="block font-medium leading-6 text-gray-900">18h à 22h</label>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="sm:col-span-full">
        <label for="info" class="block font-medium leading-6 text-gray-900">Horaire précis et matériel
          nécessaire.</label>
        <div class="mt-2">
          <input type="text" name="info" id="info" autocomplete="off"
                 v-model="person.info"
                 class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
        </div>
      </div>

      <div class="sm:col-span-full mt-2">
        <label for="number_people" class="required block font-medium leading-6 text-gray-900">
          Nombre de personnes.</label>
        <div class="mt-2">
          <input type="text" name="number_people" id="number_people" autocomplete="off"
                 v-model="person.number_people"
                 class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6">
        </div>
      </div>

      <div class="sm:col-span-3 mt-2">
        <label for="table_layout" class="required block font-medium text-gray-900">Disposition des tables</label>
        <div class="mt-2">
          <select id="table_layout" name="table_layout" autocomplete="off"
                  v-model="person.table_layout"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs">
            <option v-for="option in tablesLayout">{{ option }}</option>
          </select>
        </div>
      </div>

    </div>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error="error"/>
    <div class="text-base text-green-500" v-if="didItWork">Votre demande a bien été envoyée</div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="font-semibold leading-6 text-gray-900"
              @click="openBook=false">Annuler
      </button>
      <button type="button"
              @click.prevent="addBook"
              :disabled="btnIsDisabled"
              class="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Valider
      </button>
    </div>
  </form>
</template>