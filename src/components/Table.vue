<template>
  <section>
    <button class="button field is-danger" @click="selected = null"
      :disabled="!selected">
      <span>Clear selected</span>
    </button>
    <b-tabs>
        <b-tab-item label="List">
            <b-table :data="data"
                      :columns="columns"
                      :selected.sync="selected"
                      focusable>
              <template v-for="column in columns">
                  <b-table-column :key="column.id" v-bind="column">
                      <template
                          v-if="column.searchable && !column.numeric"
                          slot="searchable"
                          slot-scope="props">
                          <b-input
                              v-model="props.filters[props.column.field]"
                              placeholder="Search..."/>
                      </template>
                      <template v-slot="props">
                          {{ props.row[column.field] }}
                      </template>
                  </b-table-column>
              </template>
            </b-table>
        </b-tab-item>

        <b-tab-item label="Selected" v-if="selected !== null">
            <Edit 
              v-bind:firstName="selected.first_name"
              v-bind:lastName="selected.last_name"
              v-bind:date="selected.date"
              v-bind:gender="selected.gender"/>
        </b-tab-item>

        <b-tab-item label="Add">
            <Edit />
        </b-tab-item>
    </b-tabs>
    
    </section>
</template>

<script>
import axios from 'axios';
import Edit from './Edit.vue';

export default {
  name: 'Table',
  data() {
    /* const data = [
        { 'id': 1, 'lat': 'Jesse', 'lon': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
    ] */

    return {
        data: null,
        selected: null,
        columns: [
            {
                field: 'id',
                label: 'ID',
                width: '100',
                numeric: true,
                searchable: true,
            },
            {
                field: 'lat',
                label: 'Latitude',
                searchable: true,
            },
            {
                field: 'lon',
                label: 'Longitude',
                searchable: true,
            },
            {
                field: 'image',
                label: 'Image',
                centered: true
            },
            {
                field: 'hint',
                label: 'Hint',
                searchable: true
            }
        ]
    }
  },
  mounted() {
    var url = 'http://127.0.0.1:30006/geocaches/all';
    // Axios works as AJAX
    axios
      .get(url)
      .then(response => (this.data = response.data))
  },
  components: {
    Edit
  }
}
</script>

<style>

</style>
