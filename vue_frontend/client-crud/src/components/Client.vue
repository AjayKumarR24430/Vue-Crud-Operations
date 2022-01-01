<template>
  <div v-if="currentClient" class="edit-form py-3">
    <p class="headline">Edit Client</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentClient.name"
        :rules="[(v) => !!v || 'Name is required']"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentClient.email"
        :rules="[(v) => !!v || 'Email is required']"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentClient.phone"
        :rules="[(v) => !!v || 'Phone is required']"
        label="Phone"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentClient.providers"
        :rules="[(v) => !!v || 'Providers are required']"
        label="Providers"
        required
      ></v-text-field>

      

      <v-btn color="error" small class="mr-2" @click="deleteClient">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateClient">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a Client...</p>
  </div>
</template>

<script>
import ClientDataService from "../services/ClientDataService";

export default {
  name: "client",
  data() {
    return {
      currentClient: null,
      message: "",
    };
  },
  methods: {
    getClient(id) {
      ClientDataService.get(id)
        .then((response) => {
          this.currentClient = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateClient() {
      ClientDataService.update(this.currentClient.id, this.currentClient)
        .then((response) => {
          console.log(response.data);
          this.message = "The client was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteClient() {
      ClientDataService.delete(this.currentClient.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "clients" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getClient(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
