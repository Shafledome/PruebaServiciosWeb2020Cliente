<template>
    <section>
        <b-field label="Email">
            <b-input type="email"
                :value="firstName"
                maxlength="30"
                v-if="firstName !== null">
            </b-input>
            <b-input type="text"
                v-if="firstName === null">
            </b-input>
        </b-field>

        <b-field label="Username">
            <b-input :value="lastName"
                     maxlength="30"
                     v-if="lastName !== null">
            </b-input>
            <b-input type="text"
                v-if="lastName === null">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                :value="date"
                password-reveal
                v-if="date !== null">
            </b-input>
            <b-input type="text"
                v-if="date === null">
            </b-input>
        </b-field>

        <b-field label="Gender">
            <b-input type="text"
                :value="gender"
                v-if="gender !== null">
            </b-input>
            <b-input type="text"
                v-if="gender === null">
            </b-input>
        </b-field>
        <button class="button field is-link" @click="addEdit()">
            <span>{{ addEditText }}</span>
        </button>
        <button class="button field is-danger" v-if="addEditText !== 'Add'">
            <span>Delete</span>
        </button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                addEditText: null
            }
        },
        props: {
            firstName: String,
            lastName: String,
            date: String,
            gender: String

        },
        mounted() {
            if (this.firstName === undefined && this.lastName === undefined && this.date === undefined && this.gender === undefined) {
                this.addEditText = "Add"
            } else {
                this.addEditText = "Edit"
            }
        },
        methods: {
            addEdit: function() {
                if (this.firstName === undefined && this.lastName === undefined && this.date === undefined && this.gender === undefined) {
                    // add();
                } else {
                    // edit();
                }
            },
            deleteFunction: function() {

            }
        }
    }
</script>